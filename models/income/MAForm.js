import { Sequelize } from "sequelize";
import db from "../../config/Database.js";

const { DataTypes } = Sequelize;

const MAForm = db.define("ma_from", {
  fullname: DataTypes.STRING,
  maktub_num: DataTypes.STRING,
  date: DataTypes.DATE,
  reference: DataTypes.STRING,
  year: DataTypes.DATE,
  amount: DataTypes.INTEGER,
  desc: DataTypes.STRING,
  tariff_num: DataTypes.INTEGER,
  tariff_date: DataTypes.DATE,
  pendant_num: DataTypes.INTEGER,
  pendant_date: DataTypes.DATE,
  remark: DataTypes.STRING
});

export default MAForm;

// (
//   async() => {
//     await db.sync();
//   }
// )();