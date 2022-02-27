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
	// but due to the deadline of the project, i opted
	// to move on.
	//
	// once our app-body has buttons, we can implement
	// on press => add name of button to array
	// and then use that array to query the database
	// however many times we need. *HOPEFULLY* - ;_;
	//
	// i came back 2 days later and that's exactly how it's working now ^_^
	// not sure how to use those arrays to query, but this endpoint
	// works for the API.
	getCityWithFilter(city, filter) {
		return this.client.query(`SELECT ${filter} FROM cities WHERE city = '${city}'`);
	}

	// get city specified by name and filter
	//
	// this endpoint is for users that enter multiple cities and filters.
	//
	// cities and filters have been split into arrays.
	//
	// this endpoint will take those arrays and query the database
	// for each city and filter.
	getCityWithFilterArray(city, filter) {
		let query = `SELECT ${filter} FROM cities WHERE city = '${city}'`;
		filter.forEach((filter) => {
			query += ` OR ${filter}`;
		});
		return this.client.query(query);
	}
}

// export db client to use in API
const db = new DBClient();
export default db;