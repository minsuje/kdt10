const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
// express 앱으로 http 서버를 생성
const server = http.createServer(app);
//socket.io를 http서버에 연결
const io = socketIO(server);
const PORT = 8000;

app.set('view engine', 'ejs');
app.get('/', (req,res) => {
    res.render('chat');
})

// io.on(): socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
    // connection 이벤트는 클라이이언트가 접속했을 때 발생
    // 콜백 함수의 인자로 소켓 객체를 제공

    // socket.id => 소켓의 고유 아이디(브라우저 탭 단위)
    console.log('[서버 연결 완료 > ]', socket.id);

    // 실습 [1]
    socket.on('hello', (data) => {
        // console.log(data);
        console.log(`${data.who} : ${data.msg}`);
        

        // 보내기
        socket.emit('helloKR', {who: 'hello', msg:'안녕!'});
    });
    
    
    socket.on('study', (data) =>{
        console.log(`${data.who} : ${data.msg}`);

        socket.emit('studying', {who: 'you', msg: '몇시까지?'});
    });

    socket.on('Bye', (data)=> {
        console.log(`${data.who} : ${data.msg}`);

        socket.emit('ByeBye', {who: 'Hey you', msg: '바이바이'});
    })
})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);

})