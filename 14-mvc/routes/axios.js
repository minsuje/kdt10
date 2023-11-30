const express = require('express');
const router = express.Router();

// 컨트롤러 연결
const controller = require('../controller/Clogin');


router.get('/', controller.axios);
// /axios
router.post('/',controller.axiosP);
// /axios

module.exports = router;