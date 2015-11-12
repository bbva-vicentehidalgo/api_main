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

  db.bl_wallet.findAll({where: {"blUserIduser": 1}}).then(function(wallets){
    return res.jsonp(wallets);
  }).catch(function(err){
    return res.render('error', {
      error: err,
      status: 500
    });
  });
  
};
