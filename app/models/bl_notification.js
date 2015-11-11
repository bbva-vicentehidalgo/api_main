'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bl_notification', {
    idnotification: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    fk_iduser: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fk_iddevice: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dateSent: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};
