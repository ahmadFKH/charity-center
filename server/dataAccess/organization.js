let connect = require('../dataAccess/dataAccess').sequelize;
const Sequelize = require('sequelize');

let Organization = connect.define('organization', {
    org_id: {type: Sequelize.STRING, allowNull: false, primaryKey: true},
    name: {type: Sequelize.STRING, allowNull: false},
    description: {type: Sequelize.STRING, allowNull: false},
    password: {type: Sequelize.STRING, allowNull: false},
    email: {type: Sequelize.STRING, allowNull: false},
    phone: {type: Sequelize.STRING, allowNull: false},
    bank_account: {type: Sequelize.STRING, allowNull: false}
})

module.exports = Organization;