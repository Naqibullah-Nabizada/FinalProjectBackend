import { Sequelize } from "sequelize";
import db from "../../config/Database.js";
import Fasel from "./Fasel.js";

const { DataTypes } = Sequelize;

const FaselDetails = db.define("faselDetails", {
  
  faselId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date:{
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  desc: {
    type: DataTypes.TEXT
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: false
  },
  private_num: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  refinement: {
    type: DataTypes.STRING,
    allowNull: false
  },
  after_pay: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  befor_pay: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  previous_considered: {
    type: DataTypes.STRING,
    allowNull: false
  },
  commitment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  income: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  transfer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  commitment_transfer: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Fasel.hasMany(FaselDetails);
FaselDetails.belongsTo(Fasel, { 'foreignKey': 'faselId' });

export default FaselDetails;

// (
//   async() => {
//     await db.sync();
//   }
// )();