'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_favorite = sequelize.define('bl_favorite', {
        idfavorite: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        associate: function(models){
            //VIC TODO
            bl_favorite.belongsTo(models.bl_user);
            bl_favorite.belongsTo(models.bl_cause);
        }
    });

    return bl_favorite;
};
