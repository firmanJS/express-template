const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const options = {
    sequelize,
    modelName: 'Todo',
    tableName: 'todo',
    timestamps: true,
    underscored: true
  }
  class Todo extends Model {
    static associate() { }
  }
  Todo.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
  }, options)
  return Todo
}
