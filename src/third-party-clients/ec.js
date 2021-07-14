import "dotenv/config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.EC_DATABASE,
  process.env.EC_USER,
  encodeURIComponent(process.env.EC_PASSWORD),
  {
    host: process.env.EC_SERVER,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 1,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;
