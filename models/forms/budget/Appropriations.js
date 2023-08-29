import { Sequelize } from "sequelize";
import db from "../../../config/Database.js";

const { DataTypes } = Sequelize;

const Appropriations = db.define("appropriations", {
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dari_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
  ,
  pashto_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
  ,
  eng_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
  },

});

export default Appropriations;

// (
//   async() => {
//     await db.sync();
//   }
// )();