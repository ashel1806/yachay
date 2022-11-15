const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../configs/database.config');

class Student extends Model {}
Student.init(
  {
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'estudiante',
    timestamps: false,
    modelName: 'Student',
    underscored: true,
  }
);

module.exports = Student;
