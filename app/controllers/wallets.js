'use strict';

/**
* Module dependencies.
*/
var StandardError = require('standard-error');
var db = require('../../config/sequelize');

/*
* List all causes
*/
exports.getWallet = function(req, res) {

  db.bl_wallet.findAll({include: [db.bl_user]}).then(function(wallets){
    return res.jsonp(wallets);
  }).catch(function(err){
    return res.render('error', {
      error: err,
      status: 500
    });
  });

};


/**
 * Wallet authorizations routing middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.article.User.id !== req.user.id) {
      return res.send(401, 'User is not authorized_2 hasAuthorization');
    }
    next();
};
