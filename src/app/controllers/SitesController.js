const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SitesController {
    // [GET] / Home
    async home(req, res, next) {
        try {
            let courses = await Course.find({});
            if (courses.length > 0) {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            } else {
                res.status(400).json({ error: 'ERROR !!' });
            }
        } catch (err) {
            next();
        }
    }

    // [GET] / Search
    search(req, res) {
        res.send('search');
    }
}

module.exports = new SitesController();
