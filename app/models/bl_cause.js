'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_cause = sequelize.define('bl_cause', {
        idcause: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        concept: {
            type: DataTypes.STRING,
            allowNull: false
        },
        causeDescription: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        interest: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: '0'
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        dueNumber: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        currentFee: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        dateExpired: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dateDead: {
            type: DataTypes.DATE,
            allowNull: false
        },
        reinbursement: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0'
        },
        score: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '50'
        }
    },
    {
        associate: function(models){
            //VIC TODO
            bl_cause.belongsTo(models.bl_user);
            bl_cause.belongsTo(models.bl_category);
        }
    });

    return bl_cause;
};
