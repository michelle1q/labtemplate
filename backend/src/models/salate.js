'use strict';
module.exports = (sequelize, DataTypes) => {
  var salate = sequelize.define('salate', {
    sal_tip: DataTypes.STRING,
    sal_descriere: DataTypes.STRING,
    sal_pret: DataTypes.DOUBLE,
    sal_gramaj: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return salate;
};