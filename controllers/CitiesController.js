import db from '../utils/db.js';

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
		// req.body.filter cannot be array - will only be a single string
		db.getCityWithFilter(req.body.city, req.body.filter)
		.then(city => res.send(city.rows[0]))
		.catch(err => res.status(500).send({ error: 'Internal server error' }));
	}
}

export default CitiesController;