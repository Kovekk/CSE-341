const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

// routes.get('/', lesson1Controller.buildHome);
routes.get('/professional', lesson1Controller.buildProfessional);

module.exports = routes;