const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/create', courseController.POSTcreate);
router.get('/:slug', courseController.findOne);

module.exports = router;
