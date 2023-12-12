const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = 8000;

app.set('view engine', 'ejs');
app.get('/', (req,res) => {
    res.render('chat');
})

io.on('connection', (socket) => {
    console.log('[서버 연결 완료]', socket.id)
    
    // 전체 클라이언트에게 메시지 전송
    io.emit('notice', `${socket.id} 님이 입장하셨습니다.`);

    socket.on('forServer', (data) => {
        console.log(data);
    })

    // socket.emit('notice', {msg: '유저가 입장했습니다.'})
})

// 실습3
// emit() form server
// -socket.emit(event_name, data) : 해당 클라이언트에게만 이벤트, 데이터를 전송
// -io.emit(event_name, data) : 서버에 접속된 모든 클라이언트에 전송
// -io.to(소켓 아이디).emit(event_name, data) : 소켓 아이디에 해당하는 클라이언트에게만 전송

// 전체 클라이언트에게 메시지 전송
// io.emit('notice', `${socket.id} 님이 입장하셨습니다.`);

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})