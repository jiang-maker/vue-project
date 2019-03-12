
'use strict';
module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,            // 主键
      autoIncrement: true,         // 自动递增
    },
    username: dataTypes.STRING(100),
    password: dataTypes.STRING(100),
    createdAt: dataTypes.BIGINT,
    updatedAt: dataTypes.BIGINT,
  })

  User.associate = function(models) {
    models.User.hasMany(models.Task);
  };

  return User;
};