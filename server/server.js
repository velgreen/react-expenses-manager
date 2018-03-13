const express = require('express');
const path = require('path');

const port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, '..', 'dist');
const app = express();

app.use(express.static(publicPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
	console.log('server is run on 5000')
});