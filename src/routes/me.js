const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);
router.get('/restore/courses/:id', meController.restoreCourses);
router.get('/edit/courses/:slug', meController.editCourses);
router.put('/edit/courses/:slug', meController.PUTeditCourses);
router.delete('/delete/courses/:slug', meController.deleteCourses);
router.delete('/delete/courses', meController.deleteMultiCourses);

module.exports = router;
