const axios = require('axios');

exports.homeRoute = (req, res) => {
    // make a get request to /users
    axios.get('http://localhost:3000/api/users')
        .then(function (response) {
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
    axios.get('http://localhost:3000/api/users', { params: { id: req.query.id }})
        .then(function (userdata) {
            res.render('user_update', { user: userdata.data })
        })
        .catch( err => {
            res.send(err);
        });
}
