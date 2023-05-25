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
    type: DataTypes.DATE,
    allowNull: false
  },
  semester: {
    type: DataTypes.STRING,
    allowNull: false
  },
  internel_fees: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 0
  },
  fees: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 0
  }
  ,
  tariff_num: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tariff_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  pendant_num: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  pendant_date: {
    type: DataTypes.DATE,
    allowNull: true
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