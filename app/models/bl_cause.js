'use strict';
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var bl_cause = sequelize.define('bl_cause', {
    idcause: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    fk_iduser: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fk_idcategory: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false
    },
    causeDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    interest: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: '5'
    },
    amount: {
      type: 'DOUBLE',
      allowNull: false
    },
    dueNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    currentFee: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateUpdated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateExpired: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateDead: {
      type: DataTypes.DATE,
      allowNull: false
    },
    reinbursement: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    score: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '30'
    }
},
{
	associate: function(models){
		bl_cause.belongsTo(models.bl_user);
	}
});

return bl_cause;
};
