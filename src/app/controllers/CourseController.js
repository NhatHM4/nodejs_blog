const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] / Home
    async findOne(req, res, next) {
        let slug = req.params.slug;
        try {
            let course = await Course.find({ slug: slug });
            if (course.length > 0) {
                res.render('courses/detail', {
                    course: mongooseToObject(course),
                });
            } else {
                res.status(400).json({ error: 'ERROR !!' });
            }
        } catch (err) {
            next();
        }
    }

    // [GET] / create
    async create(req, res, next) {
        try {
            // let course = await Course.find({slug : slug});
            res.render('courses/createCourse');
        } catch (err) {
            next();
        }
    }

    // [POST] / create
    async POSTcreate(req, res, next) {
        let course = req.body;
        course.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const formData = new Course(course);

        try {
            await formData.save();
            res.send('ok');
        } catch (err) {
            // next();
        }
    }
}

module.exports = new CourseController();
