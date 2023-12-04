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
// POST /user/singin
router.post('/singin', controller.sigin_check);


// POST /user/profile
router.post('/profile', controller.profile);
// PATCH /user/profile/edit
router.patch('/profile/edit', controller.profileEdit);
// DELETE /user/profile/delete
router.delete('/profile/delete', controller.profileDelete);


module.exports = router;