// use import syntax to import express
import express from 'express';
import router from './routes/index.js';

const app = express();
router(app);
const port = 5000;

app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
});

app.get('/express_backend', (req, res) => {
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});