const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.get('/about', homeController.about);
router.get('/params/:id/:slug', homeController.params);
router.get('/query-string', homeController.queryString);

module.exports = router;