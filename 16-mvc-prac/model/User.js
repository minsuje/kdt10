const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost', // DB가 설치된 호스트 IP주소
    user: 'user', //DB접속 유저이름
    password: '1234', //DB접속 비밀번호
    database: 'kdt' // DB이름
})

// 데이터 베이스 불러오기
exports.postDB = (data,cb) =>{
    console.log('postDB > ',data);

    const sql = "INSERT INTO user (id, pw, name) value( ?, ?, ?)"
    const values = [data.id, data.pw, data.name];

    conn.query(sql,values, (err, rows) => {
        if(err) throw err;

        console.log('User.js (데이터베이스) > ' ,rows);

        cb(rows);
    })
}