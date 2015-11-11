'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_category = sequelize.define('bl_category', {
        idcategory: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        catName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        caption: {
            type: DataTypes.STRING,
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '1'
        }
    });

    return bl_category;
};
