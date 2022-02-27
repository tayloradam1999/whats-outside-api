import express from 'express';

// import controllers
import UsersController from '../controllers/UsersController.js';
import CitiesController from '../controllers/CitiesController.js';


// router setup
const router = (app) => {
	const paths = express.Router();
	app.use(express.json());
	app.use('/', paths);

	// GET '/users' - backend endpoint
	paths.get('/users', UsersController.getUsers);
	// POST '/users' - backend endpoint
	paths.post('/users', UsersController.postNewUser);
	// POST '/users/login' - backend endpoint
	paths.post('/users/login', UsersController.loginUser);
	// GET '/cities' - backend endpoint
	paths.get('/cities', CitiesController.getCities);
	// GET '/cities/:city' - backend endpoint
	paths.get('/cities/:city', CitiesController.getCityByName);
	// GET '/cities/:city/:filter' - backend endpoint
	paths.get('/cities/:city/:filter', CitiesController.getCityWithFilter);
	// GET '/react/:city/:filter' - front end endpoint from submit button
	paths.get('/react/:city/:filter', CitiesController.ReactgetCityWithFilter);
	// GET '/reactArray/:city/:filter' - this is the endpoint if the user
	// sends cities and filters as an array of strings - no functionality
	paths.get('/reactArray/:city/:filter', CitiesController.ReactgetCityWithFilterArray);
};


export default router;