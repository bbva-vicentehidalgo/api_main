'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_wallet = sequelize.define('bl_wallet', {
        idwallet: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: '0'
        }
    },
    {
        associate: function(models){
            bl_wallet.belongsTo(models.bl_user);
        }
    });

    return bl_wallet;
};
