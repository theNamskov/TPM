import "dotenv/config";
import { Sequelize } from "sequelize";
import fs from "fs";

const connectSert = [fs.readFileSync("aws_skysql_chain.pem", "utf-8")];

const sequelize = new Sequelize(
  process.env.GIS_DATABASE,
  process.env.GIS_USER,
  encodeURIComponent(process.env.GIS_PASSWORD),
  {
    host: process.env.GIS_SERVER,
    dialect: "mariadb",
    port: 5001,
    dialectOptions: {
      ssl: {
        ca: connectSert,
      },
    },
  }
);

export default sequelize;
