const db = require('../utils/db');

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
}

module.exports = CitiesController;