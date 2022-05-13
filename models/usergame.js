'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.UserGameBiodata, {as: 'user_game_biodata'})
      this.hasMany(models.UserGameHistory, {as: 'user_game_history'})
    }
  }
  UserGame.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'user_games',
    modelName: 'UserGame',
    underscored: true,
  });
  return UserGame;
};