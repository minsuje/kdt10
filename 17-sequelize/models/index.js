// 전체 정보가 index에 있다.

const Sequelize = require('sequelize');
//[]을 붙여줘서 원하는 데이터베이스?(개발환경?)를 가져온다
const config = require(__dirname + '/../config/config.json')['development'];

console.log('config >',config);
/**
 *  username: 'user',
    password: '1234',
    database: 'kdt',
    host: '127.0.0.1',
    dialect: 'mysql'
 */

const db = {};
// 시퀄라이즈 객체 선언시 매개변수로 다음 정보들을 받음
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)
// console.log(sequelize);

// 데이터 베이스에 접근할 때 사용하는 orm을 만들기 위해

db.sequelize = sequelize;

db.Sequelize = Sequelize;

db.Visitor = require('./Visitor')(sequelize, Sequelize);
// models/Visitor.js에서 정의한 모델이 db.Visitor에 들어감
// db = { sequelize: sequelize, Sequelize: Sequelize, Visitor : ~~~}

module.exports = db;
// db라는 변수를 내보냄
// 시퀄라이즈 객체를 만들고 모듈로써 내보내서 "다른 파일에서 모두 같은 객체를 사용할 수 있게 함"

//이렇게 내보낸 db는 app.js에서 사용할 것이다.

