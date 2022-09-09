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
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));

app.get('/', (req, res) => {
    res.send('App running....');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}...`);
});
