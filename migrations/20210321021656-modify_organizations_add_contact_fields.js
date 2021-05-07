"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Organizations", "contactFacebook", {
      type: Sequelize.STRING,
      allowNull: true,
    }),
      queryInterface.addColumn("Organizations", "contactLinkedin", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Organizations", "contactTwitter", {
        type: Sequelize.STRING,
        allowNull: true,
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Organizations");
  },
};
