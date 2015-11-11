'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_notification = sequelize.define('bl_notification', {
        idnotification: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        dateSent: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        associate: function(models){
            bl_notification.belongsTo(models.bl_user);
            bl_notification.belongsTo(models.bl_device);
        }
    });

    return bl_notification;
};
