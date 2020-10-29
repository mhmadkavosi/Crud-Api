const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

const crudRoute = require('./api/routes/crudRoutes');

const app = express();
const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});

