const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.storedCourses);
router.get('/edit/courses/:slug', meController.editCourses);
router.put('/edit/courses/:slug', meController.PUTeditCourses);

module.exports = router;
