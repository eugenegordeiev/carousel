var express = require('express'),
    app = express(),
    status = require('http-status'),
    path = require('path'),
    helmet = require("helmet"),
    responseWrapper = require(path.resolve('./lib/responseWrapper')),
    logger = require('morgan'),
    bodyParser = require('body-parser');

// Libs
var errors = require('./config/error');


// Helmet can help protect your app from some well-known web vulnerabilities by setting app headers appropriately.
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "AUTHORIZATION, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(logger('dev'));

// Post-Processor
app.use(function(req, res, next){
    res.on('finish', function(){
        console.log('FINISH');
        //console.log(res);

    })
    next();
});

app.options("/*", function(req, res, next){
    console.log('OPTIONS');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.sendStatus(status.OK);
});

// Add public directory
app.use('/public', express.static(__dirname + '/public'));
app.use('/resources', express.static(process.env.DATA_PATH));

var routes = require('./api/routes/publicRoute');

routes(app); //register the route

// Handle uncaught exception
process.on('uncaughtException', function (error) {
    console.error("Uncaught Exception!", error);
    process.exit(1)
});

module.exports = app;
