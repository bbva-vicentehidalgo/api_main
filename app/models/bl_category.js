'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bl_category', {
    idcategory: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    catName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    caption: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dateCreated: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    }
  });
};
