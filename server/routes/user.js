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
router.get('/api/users', userController.find);
router.post('/api/users', userController.create);
router.put('/api/users/:id', userController.update);
router.delete('/api/users/:id', userController.delete);

module.exports = router;
