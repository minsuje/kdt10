const express = require('express');
const router = express.Router();

const controller = require('../controller/Cuser');

// GET /user

router.get('/', controller.main);

// GET /user/singup
router.get('/singup',controller.singup)
//post
router.post('/singup', controller.singup_new);


// GET /user/singin => post
router.get('/singin', controller.singin);
// GET /user/profile
router.get('/profile', controller.profile);

module.exports = router;