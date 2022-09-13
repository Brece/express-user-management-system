const axios = require('axios');

exports.indexRoute = (req, res) => {
    res.redirect('/users');
}

exports.homeRoute = (req, res) => {
    // make a get request to /users
    axios.get('http://localhost:3000/users')
        .then(function (response) {
            console.log('xxx');
            res.render('index', { user_list: response.data });
        })
        .catch( err => {
            res.send(err);
        });
}

exports.createRoute = (req, res) => {
    res.render('user_create');
}

exports.updateRoute = (req, res) => {
    res.render('user_update');
}
