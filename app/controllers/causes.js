'use strict';

/**
 * Module dependencies.
 */
var StandardError = require('standard-error');
var db = require('../../config/sequelize');

/*
 * List all causes
 */
exports.getAll = function(req, res) {
    db.bl_cause.findAll({where: {"amount": 9000}, include: [db.bl_user]}).then(function(causes){
        return res.jsonp(causes);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};
