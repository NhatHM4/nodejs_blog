class SitesController {
    // [GET] / Home
    home(req, res) {
        res.render('home');
    }

    // [GET] / Search
    search(req, res) {
        res.send('search');
    }
}

module.exports = new SitesController();
