// 라우터 연결
const express = require('express');
const router = express.Router();

// 컨트롤러 파일
const controller = require('../controller/Cuser');

// localhost:PORT/user 가 기본 경로가 된다.

// GET /user
router.get('/', controller.user);

module.exports = router;