import { Sequelize } from "sequelize";
import db from "../../config/Database.js";

const { DataTypes } = Sequelize;

const MAForm = db.define("twelve_section", {
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  maktub_num: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    timezone: true,
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    timezone: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tariff_num: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  tariff_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    timezone: true,
  },
  pendant_num: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  pendant_date: {
    type: DataTypes.DATE,
    allowNull: true,
    timezone: true,
  },
  remark: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default MAForm;

// (
//   async() => {
//     await db.sync();
//   }
// )();