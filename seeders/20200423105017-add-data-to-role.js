'use strict';
let data = require('../datarole/datarole.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   data.map(element => {
     element.createdAt = new Date()
     element.updatedAt = new Date()
   })
   return queryInterface
        .bulkInsert("Roles", data, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Roles", null, {})
  }
};
