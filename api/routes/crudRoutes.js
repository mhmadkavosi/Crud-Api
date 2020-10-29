const express = require('express');

const crudController = require('./../controllers/crudControllers');

const router = express.Router();


router
    .route('/')
    .post(crudController.insertOne)
    .get(crudController.getAll);




module.exports = router;