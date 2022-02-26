import express from 'express';

// import controllers
import UsersController from '../controllers/UsersController.js';
import CitiesController from '../controllers/CitiesController.js';


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
	// GET '/cities/:city/:filter'
	paths.get('/cities/:city/:filter', CitiesController.getCityWithFilter);
	// GET '/react/:city/:filter'
	paths.get('/react/:city/:filter', CitiesController.ReactgetCityWithFilter);
};


export default router;