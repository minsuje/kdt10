const express = require('express');
const router = express.Router();

const controller = require('../controller/Cuser');

// GET /user
router.get('/', controller.index);

router.get('/singup', controller.user_new);
router.post('/singup', controller.postNewUser);


router.get('/singin', controller.login_user);
router.post('/singin', controller.postLogin);

router.get('/profile', controller.getProfile);
router.patch('/profile/edit', controller.patchEdit);
router.delete('/profile/destroy', controller.delete);

router.get('/usercheck', controller.getCheck);
router.post('/token', controller.token);



module.exports = router;
