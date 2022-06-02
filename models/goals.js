const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require('/User');


class Goals extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
Goals.init(
  {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
      },
    goal1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goal1_progress: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    goal2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    goal2_progress: {
       type: DataTypes.INTEGER,
       defaultValue: 0,
    },
    goal3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    goal3_progress: {
       type: DataTypes.INTEGER,
       defaultValue: 0,
    },
},

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'goals',
  }
);

module.exports = Goals;
