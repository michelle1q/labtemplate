'use strict';
module.exports = (sequelize, DataTypes) => {
  var bauturi = sequelize.define('bauturi', {
    b_tip: DataTypes.STRING,
    b_descriere: DataTypes.STRING,
    b_pret: DataTypes.DOUBLE,
    b_gramaj: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return bauturi;
};