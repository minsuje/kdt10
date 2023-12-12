const express = require('express');
const app = express();
const ws = require('ws');
PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('client');
})

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

// express 서버와 웹 소켓 서버를 연결(같은 포트를 공유)
const wsServer = new ws.Server({server: server});

const sockets = []; // 클라이언트 소켓들을 저장할 배열

wsServer.on('connection', (socket) => {
    console.log('[클라이언트 연결 완료]')
    sockets.push(socket); // 배열에 접속한 클라이언트 객체 추가

    // 연결된 소켓을 가지고 
    //클라이언트의 메시지 수신
    socket.on('message', (message) => {
        console.log('클라이언트로부터 받은 메시지 > ', message);

        // 웹 소켓 서버에 접속한 모든 클라이언트에게 메시지 전송
        // = 브로드캐스팅(여러 컴퓨터한테 데이터 전송)
        sockets.forEach((socket) => {
            socket.send(`${message}`);
        })

        // 모든 소켓이 아닌 하나의 창에서만 보고 싶다면
        // socket.send(`${message}`); // forEach문을 제거하고 이거 하나만 작성하면 된다
    })

    socket.on('error', (error) =>{
        console.log('에러발생 > ', error);
    })


    socket.on('close', () => {
        console.log('[클라리언트 연결 종료]');
    })
})