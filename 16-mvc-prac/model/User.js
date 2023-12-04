const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost', // DB가 설치된 호스트 IP주소
    user: 'user', //DB접속 유저이름
    password: '1234', //DB접속 비밀번호
    database: 'kdt' // DB이름
})

// 데이터 베이스 값 입력
exports.postDB = (data,cb) =>{
    console.log('postDB > ',data);

    const sql = "INSERT INTO user (id, pw, name) value( ?, ?, ?)";
    const values = [data.id, data.pw, data.name];
    
    // id 중복 체크
    const sql2 = "SELECT * FROM user where id = ?";
    const values2 = [data.id];

    conn.query(sql2,values2,(err,rows) =>{
        if(err) throw err;

        console.log(rows);
        if(rows.length > 0 ){
            cb({error: "이미 존재하는 ID입니다. 값을 다시 입력해주세요"});
        }else{
            conn.query(sql,values, (err, rows) => {
                if(err) throw err;
        
                console.log('User.js (데이터베이스) > ' ,rows);
        
                cb(rows);
            })
        }
    })
    // conn.query(sql,values, (err, rows) => {
    //     if(err) throw err;

    //     console.log('User.js (데이터베이스) > ' ,rows);

    //     cb(rows);
    // })
}

// ID와 PW 데이터베이스 체크
exports.postCheck = (data,cb) => {
    const sql = "SELECT id,pw FROM user WHERE id = ? AND pw = ?";
    const values = [data.id, data.pw];

    conn.query(sql,values, (err, rows) => {
        if(err) throw err;
        console.log('아이디와 비밀번호는 ? > ', rows);
        cb(rows);
    })
}

exports.get_user = (data, cb) => {
    const sql = "SELECT * FROM user WHERE id = ?";
    const value = [data];
    conn.query(sql,value,(err,rows) => {
        if(err) throw err;
        console.log('profile rows >>>', rows);
        cb(rows)
    })
}

exports.profileChange = (data, cb) => {
    const sql = "UPDATE user SET pw = ?, name = ? WHERE id = ?";
    const value = [data.pw, data.name, data.id];
    conn.query(sql, value, (err, rows) => {
        if(err) throw err;
        console.log('New Profile >> ', rows);
        cb(rows);
    })
}

// 회원 탈퇴
exports.delete_profile = (id, cb) =>{
    const sql = "Delete FROM user where id = ? ";
    conn.query(sql, [id], (err,rows) => {
        if(err) throw err;

        console.log(rows);
        cb(rows)
    })
}