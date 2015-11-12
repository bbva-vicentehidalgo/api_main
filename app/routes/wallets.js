'use strict';

/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
wallets = require('../../app/controllers/wallets');

module.exports = function(app) {
  // Causes Routes
  app.route('/wallets')
  .get(users.requiresLogin, wallets.hasAuthorization, wallets.getWallet);

};
