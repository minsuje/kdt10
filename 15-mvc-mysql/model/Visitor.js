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
    conn.query(`SELECT * FROM visitor`, (err, rows) => {
        if(err) throw err;

        console.log('Visitor.js: ', rows);
        cb(rows);
    })
}

exports.postVisitor = (data, cb) =>{
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

        cb(rows.insertId);
    })
}

exports.get = () => {
    conn.query(`SELECT * FROM visitor `)
}

