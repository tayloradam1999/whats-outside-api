const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());
app.listen(3000, () => console.log('Server started on port 3000'));

// Test users for login, only other users that will have authenticity
// are users that were previously created during testing.
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

app.get('/users', (req, res) => {
	res.send(users);
});

app.post('/users', async (req, res) => {
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
});

app.post('/users/login', async (req, res) => {
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
});
