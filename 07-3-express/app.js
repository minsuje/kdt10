const express = require('express');

const app = express();
const PORT = 8000;

//express에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set('view engine', 'ejs');
// 템플릿 엔진 파일(.ejs)을 저장할 위치 등록
app.set('views', './views')

// static 미들웨어 등록 (정적 파일 로드 ex. css, js) 등록하지 않으면 직접 경로를 넣더라도 사용 불가
// static 이라는 실제 폴더를 static 이름으로 접근하겠다.
app.use('/static', express.static(__dirname + '/static'));
console.log(__dirname); // ~~/07-3-express

// static 이라는 실제 폴더를 public 이름으로 접근하겠다.
// app.use('/public', express.static(__dirname + '/static'))
//__dirname = /Users/jeongminsu/Desktop/github/kdt10/07-3-express



//app.get(경로, 해당 경로로 들어왔을 때 실행할 콜백함수)
// localhost:8000/ 경로로 접속했을 때
app.get('/', function(req, res){
    // res.send(응답내용)
    // res.send('<h1>Hello Express!</h1>');

    // index라는 파일명을 찾아서 해당 파일 렌더
    res.render("index");

})

app.get('/kdt', function(req, res){
    // res.send(응답내용)
    res.send('<h1>Hello KDT!</h1>');
})

app.listen(PORT, function(){
    console.log(`server listening on ${PORT}`);
})