'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bl_message', {
    idmessage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fk_iduserSent: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fk_iduserReceive: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
