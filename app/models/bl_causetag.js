'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_causetag = sequelize.define('bl_causetag', {
        idcausetag: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        associate: function(models){
            bl_causetag.belongsTo(models.bl_cause);
            bl_causetag.belongsTo(models.bl_tag);
        }
    });

    return bl_causetag;
};
