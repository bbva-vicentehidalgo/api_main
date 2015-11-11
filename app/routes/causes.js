'use strict';

/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
causes = require('../../app/controllers/causes');

module.exports = function(app) {
// Article Routes
app.route('/causes')
    .get(causes.getAll);
};
