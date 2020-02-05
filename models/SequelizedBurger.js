var Sequelize = require('sequelize');
var sequelize = require('../config/database')

var Burger = sequelize.define('burger', {
  burger_name:{
    type: Sequelize.STRING
  },
  devoured:{
    type: Sequelize.BOOLEAN
  }
})
module.exports = Burger;