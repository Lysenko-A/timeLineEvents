const express = require('express');
const app = express();
const routers = require('./routers');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost:27017/userTimeline', { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(routers);

app.use(function (req, res, next) {
    const err = new Error('404 Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res
        .status(err.status || 500)
        .send(err.message)
});

app.listen(5000, function () {
    console.log('running')
});