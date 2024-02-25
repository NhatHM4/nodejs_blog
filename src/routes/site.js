const express = require('express')
const router = express.Router();
const siteController = require('../app/controllers/SitesController')

router.use('/home', siteController.home)
router.use('/search', siteController.search)


module.exports = router