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
      .addColumn('Users', 'RoleId', {
        type : Sequelize.INTEGER,
        references : {
          model : 'Roles',
          key : 'id'
        },
        onDelete : "cascade",
        onUpdate : "cascade"
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
      .removeColumn('Users', 'RoleId')
  }
};
