'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGameBiodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.UserGame, {foreignKey: 'user_game_id', as: 'user_games'})
    }
  }
  UserGameBiodata.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    user_game_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'user_game_biodata',
    modelName: 'UserGameBiodata',
    underscored: true,
  });
  return UserGameBiodata;
};