'use strict';

module.exports = function(sequelize, DataTypes) {

	var Cause = sequelize.define('Cause', {
			concept: DataTypes.STRING,
			description: DataTypes.TEXT,
			interest: DataTypes.FLOAT,
			amount: DataTypes.FLOAT,
			dueNumber: DataTypes.INTEGER,
			currentFee: DataTypes.INTEGER,
			dateExpired: DataTypes.DATE,
			score: DataTypes.INTEGER,
			dateDead: DataTypes.DATE
		},
		{
			associate: function(models){
				Cause.belongsTo(models.User);
			}
		}
	);

	return Cause;
};
