import "dotenv/config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DVLA_DATABASE,
  process.env.DVLA_USER,
  encodeURIComponent(process.env.DVLA_PASSWORD),
  {
    host: process.env.DVLA_SERVER,
    dialect: "mssql",
    dialectOptions: {
      encrypt: true,
    },
  }
);

export default sequelize;
