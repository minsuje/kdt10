const express = require('express');
const router = express.Router();

const controller = require('../controller/Cuser');

// GET /user
router.get('/', controller.index);

router.get('/singup', controller.user_new);
router.post('/singup', controller.postNewUser);


router.get('/singin', controller.login_user);
router.post('/singin', controller.postLogin);


module.exports = router;
