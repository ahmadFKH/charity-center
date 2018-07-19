let connect = require('../dataAccess/dataAccess').sequelize;
const Sequelize = require('sequelize');

let Donator = connect.define('donator', {
    donator_id: {type: Sequelize.STRING, allowNull: false, primaryKey: true},
    firstName: {type: Sequelize.STRING, allowNull: false},
    lastName: {type: Sequelize.STRING, allowNull: false},
    password: {type: Sequelize.STRING, allowNull: false},
    email: {type: Sequelize.STRING, allowNull: false},
    phone: {type: Sequelize.STRING, allowNull: false}
})

module.exports = Donator;
