'use strict'
var express = require("express"),
    path = require('path'),
    _ = require('lodash'),
    errors = require(path.resolve('config/error'));

express.response.out = function(data, status, options) {
    if(typeof(status) === "undefined") {
        status = "success";
    }

    var results = {
        data: data,
        status: status,
    };

    results = Object.assign(results, options);

    //return results;
    return this.json(results);
}

express.response.error = function(code, message, options) {
    var results = {
        status: false,
        message: message
    };

    if(typeof(options) !== "undefined") {
        results.errors = options;
    }
    else {
        options = "";
    }

    console.error({code: code, message: message, error: options});

    this.status(code);
    return this.json(results);
}

express.response.systemError = function(code, err) {
    var statusCode = code || 500;
    var error = _.find(errors, {'code': statusCode})
    
    if(typeof(error) === "undefined") {
        error = _.find(errors, {'code': 500})
    }

    var results = {
        error: {
            code: error.code,
            message: error.statusText 
        }
    };

    if(typeof(err) !== "unedfined") {
        results.error.errors = err;
    }

    this.status(error.code);
    return this.json(results);
}
