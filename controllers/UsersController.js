import bcrypt from 'bcrypt';
// import objects from react-app/src/App.js


// not storing users in database as this application will only
// ever be used locally for testing.
//
// only 'users' that will be authenticated are stored in const 'users' 
// PLUS any users that are created during testing.
//
// this application will never be used in production, so
// the api will primarily be used for querying cities.
const users = [
	{
		name: 'testuser',
		password: 'testpassword',
	},
	{
		name: 'testuser2',
		password: 'testpassword2',
	},
	{
		name: 'testuser3',
		password: 'testpassword3',
	},
];

class UsersController {
	static getUsers(req, res) {
		res.send(users);
	}

	static postNewUser(req, res) {
		(async () => {
			try {
				const hashedPassword = await bcrypt.hash(req.body.password, 10);
				const user = {
					name: req.body.name,
					password: hashedPassword
				};
				if (!user.name || !user.password) throw new Error;
				users.push(user);
				res.status(201).send(user);
			} catch {
				res.status(500).send({ error: 'Could not create user' });
			}
		})
	}

	static loginUser(req, res) {
		(async () => {
			const user = users.find(user => user.name === req.body.name);
			if (!user) return res.status(400).send({ error: 'User not found' });
			try {
				if (await bcrypt.compare(req.body.password, user.password)) {
					res.send(user);
				} else {
					res.status(400).send({ error: 'Invalid password' });
				}
			} catch {
				res.status(500).send({ error: 'Internal server error' });
			}
		})
	}
}

export default UsersController;