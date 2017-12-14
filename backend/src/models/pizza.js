'use strict';
module.exports = (sequelize, DataTypes) => {
  var pizza = sequelize.define('pizza', {
    p_tip: DataTypes.STRING,
    p_descriere: DataTypes.STRING,
    p_pret: DataTypes.DOUBLE,
    p_gramaj: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return pizza;
};