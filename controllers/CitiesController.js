import db from '../utils/db.js';
import App from '../react-app/src/App.js';


class CitiesController {
	static getCities(req, res) {
		db.getCities()
		.then(cities => res.send(cities.rows))
		.catch(err => res.status(500).send({ error: 'Internal server error' }));
	}

	static getCityByName(req, res) {
		db.getCityByName(req.body.city)
		.then(city => res.send(city.rows[0]))
		.catch(err => res.status(500).send({ error: 'Internal server error' }));
	}

	static getCityWithFilter(req, res) {
		db.getCityWithFilter(req.body.city, req.body.filter)
		.then(city => res.send(city.rows[0]))
		.catch(err => res.status(500).send({ error: 'Internal server error' }));
	}

	static ReactgetCityWithFilter(req, res) {
		db.ReactgetCityWithFilter(req.params.City, req.params.Filter)
		.then(city => res.send(city.rows[0]))
		.catch(err => res.status(500).send({ error: 'Internal server error' }));
	}
}

export default CitiesController;