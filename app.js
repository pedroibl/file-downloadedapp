const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
let bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs'); // Using EJS as the template engine

const routes = require('./routes');
app.use('/', routes);

app.get('/mycv', (req, res) => {
	res.render('mycv');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
