import { Sequelize } from "sequelize";
import db from "../../config/Database.js";

const { DataTypes } = Sequelize;

const TwelveSection = db.define("twelve_section", {
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
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false
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
  },
  tariff_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  pendant_num: {
    type: DataTypes.INTEGER,
    allowNull: true,
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

export default TwelveSection;

// (
//   async() => {
//     await db.sync();
//   }
// )();