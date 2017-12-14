'use strict';
module.exports = (sequelize, DataTypes) => {
  var sosuri = sequelize.define('sosuri', {
    so_tip: DataTypes.STRING,
    so_descriere: DataTypes.STRING,
    so_pret: DataTypes.DOUBLE,
    so_gramaj: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return sosuri;
};