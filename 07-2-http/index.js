// http 모듈로 웹 서버 생성

const http = require('http');
const fs = require('fs'); // 파일 관련 내장 모듈 (파일을 읽어와서 전송)
const server = http.createServer(function(req, res){
    // req : request 객체 (클라이언트에서 서버로 들어온 요청)
    // res : response 객체 (서버에서 클라이언트로 보내는 응답)

    // 응답 head, 본문, end를 지정
    // res.writeHead(200, {'content-type': 'text/html; charset=utf8'});  // 응답 헤더
    // res.write('<h1>Hello, node.js!</h1>'); //응답 본문
    // res.end('<p>My First Node Server!</p>'); //응답 종료 주석 처리 시 무한 로딩
    // 위 코드는 localhost:8000 접속 시 일어남


    try{
    const data = fs.readFileSync('./inde.html'); //경로에 있는 파일을 읽어 오겠다.
    res.writeHead(200, {'content-type': 'text/html; charset=utf8'});
    res.write(data);
    res.end();
    }catch(error){
        // 실습 : 404.html 만들어서 해당 html 파일을 응답으로 보내도록 코드 작성!
        console.log(error);
        const data = fs.readFileSync('./404.html');
        res.writeHead(200, {'content-type': 'text/html; charset=utf8'});
        res.write(data);
        res.end();
    }
});
const PORT = 8000;

// request 이벤트 : 클라이언트 요청
// 서버단에서 결과를 확인가능
server.on('request', function(req, res){
    console.log('request 이벤트 발생', req.url);
})

// connection 이벤트 : 클라이언트가 접속(클 - 서 연결됐을 때)했을 때 발생
server.on('connection', function(req, res){
    console.log('connection 이벤트 발생');
})

// 10초 후 서버 종료
// setTimeout(function(){
//     console.log('10초가 지나서 서버 종료');
//     server.close(); //서버 종료 메서드
// }, 10000);

// 

server.listen(PORT, function(){
    console.log(`sever listening on ${PORT}`);
})
