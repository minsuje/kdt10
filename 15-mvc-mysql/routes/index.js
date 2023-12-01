const express = require('express');
const router = express.Router();

const controller = require('../controller/Cvisitor');
const { route } = require('../../14-mvc/routes');




router.get('/', controller.main);
router.get('/visitor', controller.getVisitors);

// post
router.post('/visitor', controller.post_visitor);



module.exports = router;
