'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGameHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.UserGame, {foreignKey: 'user_game_id', as: 'user_games'})
    }
  }
  UserGameHistory.init({
    game: DataTypes.STRING,
    score: DataTypes.INTEGER,
    last_login: DataTypes.DATE,
    user_game_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'user_game_histories',
    modelName: 'UserGameHistory',
    underscored: true,
  });
  return UserGameHistory;
};