const User = require('./user');
const Goals = require('./goals');

User.hasMany(Goals, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Goals.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Goals };
