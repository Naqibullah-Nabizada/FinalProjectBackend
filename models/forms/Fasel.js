import { Sequelize } from "sequelize";
import db from "../../config/Database.js";
import ParentBabs from "./ParentBab.js";

const { DataTypes } = Sequelize;

const Fasel = db.define("fasel", {
  parentBabsId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

ParentBabs.hasMany(Fasel);
Fasel.belongsTo(ParentBabs, { 'foreignKey': 'parentBabsId' });

export default Fasel;

// (
//   async() => {
//     await db.sync();
//   }
// )();