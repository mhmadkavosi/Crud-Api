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

app.use(express.json());
app.use(morgan('dev'));

const db = process.env.DATABASE_LOCAL;
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log("Database connect successfuly!"));

