'use strict';

/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
causes = require('../../app/controllers/causes');

module.exports = function(app) {
  // Causes Routes
  app.route('/causes')
  .get(causes.getAll);
  app.route('/causes/:causeId')
  .get(causes.show);

app.param('causeId', causes.cause);
};
