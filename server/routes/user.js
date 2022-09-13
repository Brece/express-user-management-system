const express = require('express');
const router = express.Router();
const services = require('../services/render');
const userController = require('../controllers/userController');

/**
 * @description Root Route
 * @method GET /
 */
router.get('/', services.homeRoute);

/**
 * @description create user
 * @method GET /user/create
 */
router.get('/user/create', services.createRoute);

/**
 * @description update user
 * @method GET /user/update
 */
router.get('/user/update', services.updateRoute);

// API
router.get('/users', userController.find);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

module.exports = router;
