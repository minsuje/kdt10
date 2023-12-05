const express = require('express');
const router = express.Router();

const controller = require('../controller/Cmain');

//localhost:PORT / 기본주소
// router.get('/',controller.main);

//get으로 players에 요청이간다.
// GET {{server}}/players 전체선수조회
router.get('/players', controller.getPlayers);

module.exports = router;