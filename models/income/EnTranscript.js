import { Sequelize } from "sequelize";
import db from "../../config/Database.js";

const { DataTypes } = Sequelize;

const EnTranscript = db.define("en_transcript", {
  name: DataTypes.STRING,
  father_name: DataTypes.STRING,
  count: DataTypes.INTEGER,
  reference: DataTypes.STRING,
  cost: DataTypes.INTEGER,
  tariff_num: DataTypes.INTEGER,
  tariff_date: DataTypes.DATE,
  pendant_num: DataTypes.INTEGER,
  pendant_date: DataTypes.DATE,
  remark: DataTypes.STRING
});

export default EnTranscript;

// (
//   async() => {
//     await db.sync();
//   }
// )();