'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var bl_tag = sequelize.define('bl_tag', {
        idtag: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tagName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tagDescription: {
            type: DataTypes.STRING,
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: '1'
        }
    });

    return bl_tag;
};
