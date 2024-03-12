const Course = require('../models/Course');
const {
    mongooseToObject,
    multipleMongooseToObject,
} = require('../../util/mongoose');

class MeController {
    // [GET] / me/ stored/courses
    async storedCourses(req, res, next) {
        try {
            let courses = await Course.find({});
            if (courses.length > 0) {
                res.render('me/storedCourses', {
                    courses: multipleMongooseToObject(courses),
                });
            } else {
                res.status(400).json({ error: 'ERROR !!' });
            }
        } catch (err) {
            next();
        }
    }

    // [GET] me/edit/courses
    async editCourses(req, res, next) {
        let id = req.params.slug;
        try {
            let course = await Course.find({ _id: id });
            if (course.length > 0) {
                res.render('me/editCourse', {
                    course: mongooseToObject(course),
                });
            } else {
                res.status(400).json({ error: 'ERROR !!' });
            }
        } catch (err) {
            next();
        }
    }

    // [POST] me/edit/courses
    async PUTeditCourses(req, res, next) {
        let id = req.params.slug;
        const updatedCourse = req.body;
        updatedCourse.updateAt = Date.now();
        try {
            await Course.findOneAndUpdate({ _id: id }, updatedCourse, {
                new: true,
            });
            res.redirect('/me/stored/courses');
        } catch (error) {
            next();
        }
    }
}

module.exports = new MeController();
