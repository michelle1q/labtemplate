'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    id_user: DataTypes.STRING,
    nume: DataTypes.STRING,
    prenume: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};