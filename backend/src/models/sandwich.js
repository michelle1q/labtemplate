'use strict';
module.exports = (sequelize, DataTypes) => {
  var sandwich = sequelize.define('sandwich', {
    san_tip: DataTypes.STRING,
    san_descriere: DataTypes.STRING,
    san_pret: DataTypes.DOUBLE,
    san_gramaj: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return sandwich;
};