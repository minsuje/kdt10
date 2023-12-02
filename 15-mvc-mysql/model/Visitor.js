// exports.getVisitors = () =>{
//     return [
//         {id:1, name:'홍길동', comment: '내가 왔다'},
//         {id:2, name:'이찬혁', comment: '으라차차'},
//     ];
// }

//=========== mysql 연결 ============

const mysql = require('mysql2');
// DB연결
const conn = mysql.createConnection({
    host: 'localhost', // DB가 설치된 호스트 IP주소
    user: 'user', //DB접속 유저이름
    password: '1234', //DB접속 비밀번호
    database: 'kdt' // DB이름
})


// cb는 콜백함수이다.
exports.getVisitors = (cb) => {
    // query(sql, 콜백함수) or query(sql, values?, 콜백함수)
    conn.query(`SELECT * FROM visitor`, (err, rows) => {
        if(err) throw err;

        console.log('Visitor.js: ', rows);
        cb(rows); // 컨트롤러로 결과값을 넘겨줌
    })
}

exports.postVisitor = (data, cb) =>{
    // 우리가 넘겨준 data : req.body
    // cb 콜백함수
    // 컨트롤러는 모델과 db연결리 끝났는지 아닌지 모르니까 cb을 사용해서 다 끝나면 아래가 진행된다.
    console.log('postVisitor => ', data);

    /**
     * Prepared Statements
     * SQL 쿼리에서 사용자 입력을 안전하게 처리하고 SQL 인젝션 공격을 
     * 방지하기 위한 방법
     * 
     * 입력 데이터를 직접 문자열로 쿼리에 삽입하는 대신,
     * 플레이스홀더를 사용하여 쿼리 작성
     * mysql 에서는 ? (물음표) 사용
     * 
     */

    const sql = "INSERT INTO visitor (name, comment) VALUE (?, ?)";

    const values = [data.name, data.comment]; // 하나여도 배열로 감싸서 보내야 한다.
    // 두번째 인자는 항상 배열로 감싸서 보내야 한다.
    conn.query(sql,values, (err, rows) => {
        if(err) throw err;

        console.log('Visitor.js > ' , rows)

        // insertId 값을 넘겨준다.

        cb(rows.insertId); // 콜백함수 호출, 매개변수 3 이라는 값
    })
}

exports.get = () => {
    conn.query(`SELECT * FROM visitor `)
}

exports.getVisitor = (id, cb) => {
    const sql = `SELECT * FROM visitor where id = ?`;
    conn.query(sql, [id], (err,rows) => {
        if(err) throw err;

        console.log('getVisitor Visitor.js > ' , rows);
                // [{ id: 1 ~~~}]

        cb(rows[0]);
    })
}

exports.patchVisitor = (data, cb) =>{
    const sql = 'UPDATE visitor SET name = ?, comment = ? WHERE id = ?';
    const values = [data.name, data.comment, data.id];

    conn.query(sql, values, (err, rows) =>{
        if(err) throw err;

        console.log('patchVisitor Visitor.js > ', rows);
        cb(rows);
    })
}

exports.deleteVisitor =(id, cb) =>{
    console.log(id);
    const sql = 'DELETE FROM visitor WHERE id = ?';

    conn.query(sql, [id], (err,rows)=>{
        if(err) throw err;

        console.log('deleteVisitor Visitor.js > ', rows);
        cb(rows);
    })
}