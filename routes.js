const express = require('express');
const router = express.Router();

const indexController = require('./controllers/indexController');
const contactController = require('./controllers/contactController');
const aboutController = require('./controllers/aboutController');
const servicesController = require('./controllers/servicesController');

router.get('/', indexController.index);
router.get('/contact', contactController.contact);
router.get('/about', aboutController.about);
router.get('/services', servicesController.services);

module.exports = router;
