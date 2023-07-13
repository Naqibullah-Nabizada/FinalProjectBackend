import { Sequelize } from "sequelize";
import db from "../../config/Database.js";

const { DataTypes } = Sequelize;

const NMDTN = db.define("nmdtn_fees", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  father_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  faculty: {
    type: DataTypes.STRING,
    allowNull: false
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false
  },
  semester: {
    type: DataTypes.STRING,
    allowNull: false
  },
  internel_fees: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  fees: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
  ,
  tariff_num: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true

  },
  tariff_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  pendant_num: {
    type: DataTypes.STRING,
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
    allowNull: true
  }
});

export default NMDTN;

// (
//   async() => {
//     await db.sync();
//   }
// )();