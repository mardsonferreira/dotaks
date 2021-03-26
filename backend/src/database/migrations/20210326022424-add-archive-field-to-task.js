/* eslint-disable arrow-body-style */
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn('tasks', 'archive', {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        });
    },

    down: async (queryInterface) => {
        return queryInterface.removeColumn('tasks', 'archive');
    },
};
