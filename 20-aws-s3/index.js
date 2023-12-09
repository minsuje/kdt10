const express = require('express');
const app = express();
// const PORT = 8000;

const dotenv = require('dotenv');
dotenv.config();

// aws설정을 위한 모듈
const aws = require('aws-sdk');

const multer = require('multer');
const multerS3 = require('multer-s3'); //aws S3에 업로드하기 위한 설정 multer설정

// aws 설정 (IAM에서 받은 정보 ** 중요한 정보라 환경변수 env에 정의 )
aws.config.update({
    accessKeyId: process.env.AWS_S3_KEY_ID,
    secretAccessKey: process.env.AWS_S3_ACCESS_KEY,
    region: process.env.AWS_S3_REGION
})

// aws s3 인스턴스 생성
const s3 = new aws.S3();

// view engine 설정
app.set('view engine', 'ejs');
// app.set('views', './views'); // 생략 가능

// multer 설정 - aws ver.
// const upload = multer({storage})

// 옵션
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET,
        acl: 'public-read', // 파일 접근 권한 (public-read로 해야 업로드 된 파일이 공개)
        contentType: multerS3.AUTO_CONTENT_TYPE, // 자동 감지
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            cb(null, Date.now().toString() + "-" + file.originalname);
        }
    })
})




app.get('/', (req,res) => {
    res.render('index');
})

// 파일이 두개라 array로 받아줌, 배열의 이름은 미리 정의해둔 files로 
app.post('/upload', upload.array('files'), (req, res) => {
    console.log(req.files);
    res.send(req.files);
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})





