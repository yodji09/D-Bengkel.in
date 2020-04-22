'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface
      .addColumn('Vehicles', 'UserId', {
        type : Sequelize.INTEGER,
        references : {
          model : 'Users',
          key : 'id'
        },
        onDelete : 'cascade',
        onUpdate : 'cascade'
      })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface
      .removeColumn('Vehicles', 'UserId')
  }
};
