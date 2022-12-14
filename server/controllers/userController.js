const User = require('../models/User');

// create and save new user
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: 'Content can not be empty!' });
        return;
    }

    // new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    // save user
    user
        .save()
        .then( data => {
            res.redirect('/');
        })
        .catch( err => {
            res.status(500).send({ message: err.message || 'Some error occured while a create operation.'})
        });
}

// get all users / get a single user
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        User
            .findById(id)
            .then( data => {
                if (!data) {
                    res.status(404).send({ message: `User with ID: ${id} not found!`});
                } else {
                    res.send(data);
                }
            })
            .catch( err => {
                res.status(500).send({ message: err.message })
            });
    } else {
        
        User
        .find()
        .then( user_list => {
            res.send(user_list);
        })
        .catch( err => {
            res.status(500).send({ message: err.messsage || 'Error occured by getting the user information.'})
        });
    }
}

// update user by ID
exports.update = (req, res) => {
    if (!req.body) {
        res.status(500).send({ message: err.message })
        return;
    }

    const id = req.params.id;

    User
        .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then( data => {
            if (!data) {
                res.status(404).send({ message: `Cannot update user with ID: ${id}. User not found.`})
            } else {
                res.redirect('/');
            }
        })
        .catch( err => {
            res.status(500).send({ message: err.message })
        });

}

// delete user by ID
exports.delete = (req, res) => {
    const id = req.params.id;
        
    User.findByIdAndDelete(id)
        .then( data => {
            if (!data) {
                res.status(404).send({ message: `Cannot delete user with ID: ${id}`});
            } else {
                res.redirect('/');
            }
        })
        .catch( err => {
            res.status(500).send({ message: err.message })
        });
}
