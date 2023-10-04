import { Sequelize } from "sequelize";
import db from "../../../config/Database.js";

const { DataTypes } = Sequelize;

const Program = db.define("programs", {
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  main_amount: {
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.INTEGER,
  }
});

export default Program;

// (
//   async() => {
//     await db.sync();
//   }
// )();