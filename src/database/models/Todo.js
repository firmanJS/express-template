const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Todo.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    createdAt: { type: 'TIMESTAMPTZ', field: 'created_at' },
    updatedAt: { type: 'TIMESTAMPTZ', field: 'updated_at' },
  }, {
    sequelize,
    modelName: 'Todo',
    tableName: 'todo',
    timestamps: true,
    underscored: true
  })
  return Todo
}
