'use strict';

/**
 * Module dependencies.
 */
var StandardError = require('standard-error');
var db = require('../../config/sequelize');

/**
* Find cause by id
* Note: This is called every time that the parameter :causeId is used in a URL.
* Its purpose is to preload the cause on the req object then call the next function.
*/
exports.cause = function(req, res, next, id) {
  console.log('id => ' + id);
  db.bl_cause.find({ where: {idcause: id}, include: [db.bl_user]}).then(function(cause){
    if(!cause) {
      return next(new Error('Failed to load cause ' + id));
    } else {
      req.cause = cause;
      return next();
    }
  }).catch(function(err){
    return next(err);
  });
};

/*
 * List all causes
 */
exports.getAll = function(req, res) {
    db.bl_cause.findAll({include: [db.bl_user]}).then(function(causes){
        return res.jsonp(causes);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Show an cause
 */
exports.show = function(req, res) {
    // Sending down the article that was just preloaded by the articles.article function
    // and saves article on the req object.
    return res.jsonp(req.cause);
};
