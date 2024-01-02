const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const PORT = 8000;
const app = express();

const server = http.createServer(app);
const io = SocketIO(server);

app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const socketRouter = require('./routes/socket');
let flag = true;
// console.log("flag 밖에서", flag)

app.get('/chat', (req, res) => {
    // console.log("flag if문 밖에서", flag)
    if (flag) {
        // console.log("flag if문 안에서", flag)
        // flag = false;
        socketRouter.startSocket(io);
    }
    res.render('chat')
})

app.use('/', indexRouter);



server.listen(8000, () => {
    console.log(`http://localhost:${PORT}`);
});
