let connect = require('../dataAccess/dataAccess').sequelize;
const Sequelize = require('sequelize');
let Donator = require('./donator');
let Organization = require('./organization');

let Donation = connect.define('donation', {
    donation_id: {type: Sequelize.STRING, allowNull: false, primaryKey: true},
    amount: {type: Sequelize.NUMBER, allowNull: false},
    tracking: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
    donator_id: {type: Sequelize.STRING, allowNull: false},
    org_id: {type: Sequelize.STRING, allowNull: false}
})

Donation.belongsTo(Donator, {foreignKey: donation_id});
Donation.belongsTo(Organization, {foreignKey: org_id});

module.exports = Donation;
