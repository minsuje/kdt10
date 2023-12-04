const express = require('express');
const router = express.Router();

const controller = require('../controller/Cvisitor');



router.get('/', controller.main);

// get /visitors - 전체 조회
router.get('/visitors', controller.getVisitors);

// post /visitor
router.post('/visitor', controller.post_visitor);

// get /visitor - 하나 조회
router.get('/visitor', controller.getVisitor); // req.qurey
router.get('/visitor/:id', controller.getVisitor2); //req.params

// 주의:  params사영시 라우터 정의 순서에 주의해야 함
// 코드는 위에서 아래로 시작하기 때문에 /visitor경로르 전부 찾아 보기 때문에 값이 잘못 들어 갈 수 있디ㅏ.
/**
 * router.get('/visitor/:id', controller.getVisitor2); // id : test
 * router.get('/visitor/:test', controller.getVisitor2); // => params보다 위에 적어야 원하는 값을 얻을 수 있다.
*/

// PATCH /visitor - 하나 수정
router.patch('/visitor', controller.patch_visitor);

// DELETE /visitor - 하나 삭제
router.delete('/visitor', controller.delete_visitor);

module.exports = router;
