import "dotenv/config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  storage: `${__dirname}/nhia.sqlite`,
  dialect: "sqlite",
});

export default sequelize;
