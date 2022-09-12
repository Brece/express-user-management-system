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
router.get('/user', userController.find);
router.post('/user/create', userController.create);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

module.exports = router;
