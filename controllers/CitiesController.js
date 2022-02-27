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
		// params will be passed using req.params, not req.body
		if (req.params.City.length === 0) res.send({ error: 'City is required' });
		if (req.params.Filter.length === 0) res.send({ error: 'Filter is required' });
		db.getCityWithFilter(req.params.City, req.params.Filter)
		.then(city => res.send(city.rows[0]))
		.catch(err => res.status(500).send({ error: 'Internal server error' }));
	}

	static ReactgetCityWithFilterArray(req, res) {
		let cities = req.params.City; let filters = req.params.Filter;
		if (cities.length === 0 || filters.length === 0) res.send({ error: 'City and Filter are required' });
		// whenever this endpoint is hit with two cities and two filters, the get request looks like this:
		// Cannot GET /reactArray/dallas_tx,tulsa_ok/nature,parks
		// so we need to split the cities and filters into arrays
		cities = cities.split(','); filters = filters.split(',');
		// now we can use the getCityWithFilterArray method
		db.getCityWithFilterArray(cities, filters)
		.then(city => res.send(city.rows))
		.catch(err => res.status(500).send({ error: 'Internal server error' }));
	}
}

export default CitiesController;