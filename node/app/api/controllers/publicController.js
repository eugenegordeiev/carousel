'use strict';

// Bootstrap
const status     = require('http-status'),
      path       = require('path');

var   init         = require(path.resolve("lib/init"));
const _            = require('lodash');
var images = require('../data/images');

exports.getImages = function(req, res) {
    if(!req.params.imageType) {
        res.error(400, 'Failed to get images!', 'Missing Image Type!');
        return;
    }

    else if(req.params.imageType !== "sharks" && req.params.imageType !== "cats") {
        res.error(400, 'Failed to get images!', 'Wrong Image Type!');
        return;
    }

    setTimeout((() => {
        res.status(status.OK).out(images[req.params.imageType]);
    }), 500)


};