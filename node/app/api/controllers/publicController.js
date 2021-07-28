'use strict';

// Bootstrap
const status     = require('http-status'),
      path       = require('path');

var   init         = require(path.resolve("lib/init"));
const _            = require('lodash');
var images = require('../data/images');
const  utils = require(path.resolve("lib/utils"));

exports.getImages = function(req, res) {
    if(!req.params.imageType) {
        res.error(400, 'Failed to get images!', 'Missing Image Type!');
        return;
    }

    else if(req.params.imageType !== "sharks" && req.params.imageType !== "cats" && req.params.imageType !== "all") {
        res.error(400, 'Failed to get images!', 'Wrong Image Type!');
        return;
    }

    // Added timeout to display the loader
    setTimeout((() => {
        if(req.params.imageType === 'all') {
            const allImages = images['cats'].concat(images['sharks']);
            res.status(status.OK).out(utils.arrayShuffle(allImages));
        }
        else {
            res.status(status.OK).out(images[req.params.imageType]);
        }

    }), 500)
};