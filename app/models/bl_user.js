'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_user = sequelize.define('bl_user', {
        iduser: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        uuid: {
            type: DataTypes.UUID,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                msg: "Must be a valid email"
            }
        },
        emailVerified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        },
        rating: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '50'
        }
    });
    return bl_user;
};
