'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bl_device', {
    iddevice: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    fk_iduser: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    operativeSystem: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateLastLogin: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};
