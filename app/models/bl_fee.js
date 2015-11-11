'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_fee = sequelize.define('bl_fee', {
        idfee: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        associate: function(models){
            bl_fee.belongsTo(models.bl_investment);
        }
    });

    return bl_fee;
};
