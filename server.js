const { Sequelize } = require('sequelize')
var sequelize = require('sequelize')
var connection = new Sequelize('rabbit', 'root', 'Varshini1998@', {
    host: 'localhost',
    dialect: 'mysql'
});
var Article = connection.define('article', {
    title: sequelize.STRING,
    body: sequelize.TEXT
})
var Article2 = connection.define('article2', {
    section: sequelize.STRING,
    reference: sequelize.STRING
})
connection.sync({
    force: true
})
    .then(function () {

    })










