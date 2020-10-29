const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

const crudRoute = require('./api/routes/crudRoutes');

