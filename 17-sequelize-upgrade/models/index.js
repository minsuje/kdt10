const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

//모델 모듈을 불러오기
const Player = require('./player')(sequelize, Sequelize);
const Profile = require('./Profile')(sequelize, Sequelize);
const Team = require('./team')(sequelize, Sequelize);

// 관계형성
// 1) Player : Prorile = 1:1
// 한 선수당 하나의 프로필을 가짐
Player.hasOne(Profile, {
    foreignKey: 'player_id',
    // sourceKey: 'player_id', // 기본키 사용시 생략 가능
    // 연쇄 삭제, 수정
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Profile.belongsTo(Player, {
    foreignKey: 'player_id',
    // targetKey: 'player_id' // 기본키 사용시 생략 가능
});

// 2) Team : Player = 1 : N
// 한팀에는 여러 선수가 존재
Team.hasMany(Player, {
    foreignKey: 'team_id',
    // sourceKey: 'team_id'
});
Player.belongsTo(Team,{
    foreignKey: 'team_id',
    // targetKey:'team_id'
});

// player_id라는 칼럼을 기본키라 외래키로 설정
// 그럼 상대방 foreignkey도 player_id
// 근데 다른 이름으로 왜래키를 만들고 싶다면, ex) player_test, <= 에 대해 미리 모델에 정의해줘야 한다.
// 이름이 같을 때는(기본키) sorceKey와 targetKey키는 생략 가능


// 관계를 정의한 모델들을 DB 객체에 저장

db.Player = Player;
db.Profile = Profile;
db.Team = Team;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;