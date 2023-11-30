const express = require('express');
const router = express.Router();

// index.js => localhost:PORT/ 

// ============= 3 ===================
//controller 파일
const controller = require('../controller/Cmain');
// ============= 3====================

// 이 경로로 들어갔을 때 실행될 함수
// controller에다가 함수를 정의
// router.get('/', )

/*const comments = [ {
    id:1,
    userid: 'helloword',
    date: '2022-11-31',
    comment: '반가워요'
},{
    id:2,
    userid: 'Hi',
    date: '2023-11-31',
    comment: '안녕'
}, {
    id:3,
    userid: 'bye',
    date: '2021-11-31',
    comment: '잘가'
},{
    id:4,
    userid: 'good',
    date: '2024-11-31',
    comment: '잘했어'
}];


// [BEFORE] MVC적용 전에는 app.js에서 라우터 정의
// 단점: 라우터(경로)가 많아진다면 app.js 코드가 길어짐 = > 유지보수성 하락

// GET
router.get('/', (req,res) => {
    res.render('index');
})

// GET / comments <= 요청 보냄
// (임시) DB로부터 받아온 데이터 댓글 목록
// 임시로 DB로부터 나온 데이터를 받아주는 모습을 만듬(DB랑 실제로 연결하지 않아서)
router.get('/comments', (req, res)=>{
    console.log(comments) // {},{},{},{}
    console.log('comments',{commentInfos: comments}); //commentInfos 키값, comments value값
    res.render('comments',{commentInfos: comments});
})

// GET /cooment/ :id
router.get('/comment/:id', (req,res) =>{
    // req.query : /comment?id=1
    // ':'뒤에 변수 이름을 붙인다.
    console.log(req.params); // { id : '1' } : 라우트 매개변수에 대한 정보가 담겨있음
    console.log('id >', req.params.id);

    const commentId = req.params.id; // 댓글 아이디, url로 들어온 매개변수

    console.log(comments[commentId - 1]);

    // err처리, 존재하지 않는 댓글 id 접속시 404 페이지
    if(commentId < 1 || commentId > comments.length) {
        return res.render('404');
    }

    console.log(typeof commentId); // string

    // err처리 => :id 변수에 숫자가 아닌 값(commentID가 아닌 값)이 온다면 404페이지
    if(isNaN(commentId)) {
        return res.render(404)
    }
    // 배열의 index번호로 접근
    res.render('comment', { commentInfo: comments[commentId - 1]});
})
*/

///================= 3 =================
// controller 연결
// 경로를 컨드롤러와 연결지어 사용 가능
router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);
// =================================

// module.exports를 통해서 router를 등록해줘야 다른 모듈에서 사용 가능하다.
module.exports = router;

