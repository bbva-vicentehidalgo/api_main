'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bl_fee', {
    idfee: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    fk_idinvestment: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    datePaid: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};
