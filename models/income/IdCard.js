import { Sequelize } from "sequelize";
import db from "../../config/Database.js";

const { DataTypes } = Sequelize;

const IdCard = db.define("id_cards", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  ,
  father_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
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

export default IdCard;

// (
//   async () => {
//     await db.sync();
//   }
// )();