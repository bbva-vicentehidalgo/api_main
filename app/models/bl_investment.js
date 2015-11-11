'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bl_investment', {
    idinvestment: {
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
    },
    amount: {
      type: 'DOUBLE',
      allowNull: false
    }
  });
};
