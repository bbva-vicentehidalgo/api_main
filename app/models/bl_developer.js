'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_developer = sequelize.define('bl_developer', {
        iddeveloper: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        apiKey: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '0'
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    },
    {
        associate: function(models){
            bl_developer.belongsTo(models.bl_user);
        }
    });

    return bl_developer;
};
