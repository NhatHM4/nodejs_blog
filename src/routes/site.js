const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SitesController');

router.get('/home', siteController.home);
router.get('/search', siteController.search);

module.exports = router;
