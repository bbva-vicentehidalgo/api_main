'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bl_favorite', {
    idfavorite: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    fk_iduser: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fk_idcause: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};
