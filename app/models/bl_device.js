'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_device =  sequelize.define('bl_device', {
        iddevice: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        operativeSystem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateLastLogin: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        associate: function(models){
            bl_device.belongsTo(models.bl_user);
        }
    });

    return bl_device;
};
