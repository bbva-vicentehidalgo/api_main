'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_reportuser = sequelize.define('bl_reportuser', {
        idreportuser: {
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
        },
        fk_user_reporter: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        fk_user_reported: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    },
    {
        associate: function(models){
            bl_reportuser.belongsTo(models.bl_user, {foreignKey:'blUseridUserReporter'});
            bl_reportuser.belongsTo(models.bl_user, {foreignKey:'blUseridUserReported'});
        }
    });

    return bl_reportuser;
};
