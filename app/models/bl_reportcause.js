'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_reportcause = sequelize.define('bl_reportcause', {
        idreportcause: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        reviewed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0'
        }
    },
    {
        associate: function(models){
            bl_reportcause.belongsTo(models.bl_user);
            bl_reportcause.belongsTo(models.bl_cause);
        }
    });

    return bl_reportcause;
};
