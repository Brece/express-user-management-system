const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const userRouter = require ('./server/routes/user');

require('dotenv').config();
const PORT = process.env.PORT || 8080;

// database
const connectDB = require('./server/database/connection');
connectDB();

// log requests
app.use(morgan('tiny'));

// parse request to body
app.use(express.urlencoded({ extended: false }));

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// load assets
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}...`);
});
