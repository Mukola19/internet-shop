const { Sequelize } = require('sequelize')

module.exports = new Sequelize("internet_shop", "root", "4820mysql", {
    host: "localhost",
    dialect: "mysql",
    port: '5432',
    logging: function() {},
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        socketPath: "/var/run/mysqld/mysqld.sock"
    },
    define: {
        paranoid: true
    }
})