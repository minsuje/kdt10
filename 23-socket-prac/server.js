const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = 8000;

// 사용자 아이디 모음 객체
const userObjs = {};

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('chat');
})

const sockets = [];

io.on('connection', (socket) => {
    console.log('[서버 연결 완료]', socket.id);

    // socket.on('setNickname', (nickname) => {
    //     console.log(`${socket.id}의 닉네임 설정: ${nickname}`);
    //     userObjs[socket.id] = nickname;
    // })

        // 실습 3
        // 전체 클라이언트에게 메시지 전송
        // socket.emit('notice', {msg: '유저가 입장했습니다.'})
        // io.emit('notice', `${socket.id} 님이 입장하셨습니다.`);
        sockets.push(socket);
        // console.log(sockets);

        // 실습 4
        socket.on('forServer', (data) => {
            console.log(data);
            // const {who, msg} = data;

            //{id : 'wmkdlkmals', msg: '안뇽', dm : ?}
            // 실습 5, DM인지 아닌지 구분
            // dm: io.to(소켓아이디).emit() => 소켓 아이디에 해당하는 클라이언트에게만 전송

            if (data.dm === 'all') {
                // 전체 발송
                io.emit('forClient', { id: data.id, msg: data.msg });
            } else {
                // 'dm' 발송
                const dmSocketId = data.dm;
                const sendData = {
                    id: data.id,
                    msg: data.msg,
                    dm: '(DM)',
                }
                // DM을 받는 사람한테 메시지 갔음
                io.to(dmSocketId).emit('forClient', sendData);

                // DM을 보내는 사람한테도 메시지를 띄워줘야함
                socket.emit('forClient', sendData);
            }


            // sockets.forEach((socket) => {
            //     socket.emit('forClient', {who, msg});
            // })
        })

        // 실습 5 DM step.1
        socket.on('setUesrList', (data) => {
            console.log(`유저 입장 : ${data.id}`);

            // 입장 전체 공지
            io.emit('notice', `${data.id} 님이 입장하셨습니다.`);

            // 전체 사용자 아이디 모음 객체 전달
            // 새로운 유저
            // {data.id : data.id}
            userObjs[data.id] = data.id;
            socket.emit('entrySuccess', socket.id); // 현재 입장한 사람에게 입장 완료
            io.emit('updateUsers', userObjs); // 전체 사용자에게 사용자 업데이트
        })

        socket.on('disconnect', () => {
            console.log('[서버 연결 종료]', socket.id);
            // 해당 하는 소켓내용을 지움
            delete userObjs[socket.id];
            // 전체 메시지로 퇴장 알림
            io.emit('notice', `${socket.id} 님이 퇴장하셨습니다.`);
            // 목록 최신화
            io.emit('updateUsers', userObjs);

            sockets.pop(socket.id)
            // console.log(sockets);
        });
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