'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bl_developer', {
    iddeveloper: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    fk_iduser: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    apiKey: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};