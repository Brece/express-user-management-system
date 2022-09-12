const express = require('express');
const router = express.Router();
const services = require('../services/render');


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

module.exports = router;
