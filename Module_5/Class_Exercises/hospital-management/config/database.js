const { Sequelize } = require("sequelize");

// MySQL database connection with Sequelize
// const sequelize = new Sequelize("hospital", "username", "password", {
//   host: "localhost",
//   dialect: "mysql",
// });

const sequelize = new Sequelize("hospital", "root", "29121995", {
  host: "localhost",
  dialect: "mysql",
});


module.exports = sequelize;
