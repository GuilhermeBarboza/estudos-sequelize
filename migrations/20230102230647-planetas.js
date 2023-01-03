'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // método para inserção
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('planetas', {
      
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      posicao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
      },

      updatedAt: {
        type: Sequelize.DATE,
      }

    });

  },

  // método para remoção
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('planetas');
    
  }
};
