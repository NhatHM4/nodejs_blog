class NewsController {
    // [GET] / news
    index(req, res) {
        res.render('news');
    }

    // [GET] / news/:slup
    show(req, res) {
        res.send('detail');
    }
}

module.exports = new NewsController();
