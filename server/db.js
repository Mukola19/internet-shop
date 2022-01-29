const { Sequelize } = require('sequelize')

module.exports = new Sequelize("internet_shop", "root", "4820ьныйд", {
    host: "localhost",
    dialect: "mysql",
    port: '3306',

})