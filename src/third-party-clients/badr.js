import "dotenv/config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.BADR_DATABASE,
  process.env.BADR_USER,
  encodeURIComponent(process.env.BADR_PASSWORD),
  {
    host: process.env.BADR_SERVER,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

export default sequelize;
