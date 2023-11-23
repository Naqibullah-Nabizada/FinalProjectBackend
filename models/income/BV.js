import { Sequelize } from "sequelize";
import db from "../../config/Database.js";

const { DataTypes } = Sequelize;

const MAForm = db.define("bv_fees", {
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  father_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tariff_num: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  tariff_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  pendant_num: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    defaultValue: null
  },
  pendant_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null
  },
  remark: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null
  }
});

export default MAForm;

// (
//   async() => {
//     await db.sync();
//   }
// )();