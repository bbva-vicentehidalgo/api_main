'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bl_reportuser', {
    idreportuser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    fk_iduser: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fk_iduserReported: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reviewed: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    dateReported: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};
