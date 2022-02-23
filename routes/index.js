const express = require('express');

// import controllers
const UsersController = require('../controllers/UsersController');
const CitiesController = require('../controllers/CitiesController');


// router setup
const router = (app) => {
	const paths = express.Router();
	app.use(express.json());
	app.use('/', paths);

	// GET '/users'
	paths.get('/users', UsersController.getUsers);
	// POST '/users'
	paths.post('/users', UsersController.postNewUser);
	// POST '/users/login'
	paths.post('/users/login', UsersController.loginUser);
	// GET '/cities'
	paths.get('/cities', CitiesController.getCities);
	// GET '/cities/:city'
	paths.get('/cities/:city', CitiesController.getCityByName);
};

module.exports = router;