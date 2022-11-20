import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: MYSQLHOST,
    dialect: "mysql",
  }
);
