'use strict';
module.exports = (sequelize, DataTypes) => {
  var deserturi = sequelize.define('deserturi', {
    d_tip: DataTypes.STRING,
    d_descriere: DataTypes.STRING,
    d_pret: DataTypes.DOUBLE,
    d_gramaj: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return deserturi;
};