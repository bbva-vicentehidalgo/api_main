'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_message = sequelize.define('bl_message', {
        idmessage: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fk_user_sender: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        fk_user_receiver: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    },
    {
        associate: function(models){
            bl_message.belongsTo(models.bl_user, {foreignKey:'blUseridUserSender'});
            bl_message.belongsTo(models.bl_user, {foreignKey:'blUseridUserReceiver'});
        }
    });

    return bl_message;
};
