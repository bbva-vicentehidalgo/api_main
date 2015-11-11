'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_investment = sequelize.define('bl_investment', {
        idinvestment: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    },
    {
        associate: function(models){
            //VIC TODO
            bl_investment.belongsTo(models.bl_user);
            bl_investment.belongsTo(models.bl_cause);
        }
    });

    return bl_investment;
};
