const express = require('express');
const indexRouter = express.Router();
const services = require('../services/render');

indexRouter.get('/', services.indexRoute);

module.exports = indexRouter;
