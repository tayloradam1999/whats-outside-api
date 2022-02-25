// create class that will be used to connect to the database
import pg from 'pg';

const host = 'localhost';
const port = 5432;
const user = 'postgres';
// alter postgres password to get around 'password authentication failed'
const password = 'hank';
const database = 'postgres';

class DBClient {
	constructor() {
		// creates a new client and assigns it to this.client
		this.client = new pg.Client({
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

	// get city specified by name and filter
	//
	// tried for hours to get this to work with an array of filters
	// but postgresql doesn't seem to like it, json parsing errors galore.
	//
	// once our filter webpage has buttons, we can implement
	// on press => add name of button to array
	// and then use that array to query the database
	// however many times we need. *HOPEFULLY*
	getCityWithFilter(city, filter) {
		return this.client.query(`SELECT ${filter} FROM cities WHERE city = '${city}'`);
	}
}

// export db client to use in API
const db = new DBClient();
export default db;