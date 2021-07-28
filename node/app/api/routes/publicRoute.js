'use strict';

module.exports = function(app) {
    var publicController = require('../controllers/publicController');

    app.route('/public/images/:imageType?')
        .get(publicController.getImages);
};
