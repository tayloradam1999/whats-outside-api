const express = require('express');
const db = require('./utils/db');
const router = require('./routes/index');

const app = express();
router(app);
const port = 3000;

app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
});