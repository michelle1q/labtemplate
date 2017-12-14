'use strict';
module.exports = (sequelize, DataTypes) => {
  var comentariu = sequelize.define('comentariu', {
    id_comentariu: DataTypes.STRING,
    continut: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return comentariu;
};