module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('labels', {
          id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          user_id: {
            type: Sequelize.INTEGER,
            references: { model: 'users', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true,
          },
          archive: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
          },
          created_at: {
              type: Sequelize.DATE,
              allowNull: false,
          },
          updated_at: {
              type: Sequelize.DATE,
              allowNull: false,
          },
      });
  },

  down: async (queryInterface) => {
      await queryInterface.dropTable('labels');
  },
};
