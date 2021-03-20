'use strict';

const bcrypt = require("bcryptjs");

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "users",
      [
        {
          name: "Mardson Ferreira",
          email: "admin@dotaks.com",
          password_hash: bcrypt.hashSync("mardson123", 8),
          admin: true,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: () => {}
};
