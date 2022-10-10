import Sequelize from "sequelize";

export const sequelize = new Sequelize("administrador_cursos", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
