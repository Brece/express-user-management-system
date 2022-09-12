exports.homeRoute = (req, res) => {
    res.render('index');
}

exports.createRoute = (req, res) => {
    res.render('user_create');
}

exports.updateRoute = (req, res) => {
    res.render('user_update');
}
