const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

require('dotenv').config();
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan('tiny'));

// parse request to body
app.use(express.urlencoded({ extended: false }));

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// load assets
app.use(express.static(path.join(__dirname, 'public')));

// TODO: routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/user/create', (req, res) => {
    res.render('user_create');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}...`);
});
