// create class that will be used to connect to the database
const { Client } = require('pg');

const host = 'localhost';
const port = 5432;
const user = 'postgres';
// alter postgres password to get around 'password authentication failed'
const password = 'hank';
const database = 'postgres';

class DBClient {
	constructor() {
		// creates a new client and assigns it to this.client
		this.client = new Client({
			host,
			port,
			user,
			password,
			database,
		});
		this.client.connect();
	}

	// get all cities from database table 'cities'
	getCities() {
		return this.client.query('SELECT * FROM cities');
	}

	// get city specified by name
	getCityByName(city) {
		return this.client.query(`SELECT * FROM cities WHERE city = '${city}'`);
	}
}

// export db client to use in API
const db = new DBClient();
module.exports = db;