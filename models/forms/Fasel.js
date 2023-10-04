import { Sequelize } from "sequelize";
import db from "../../config/Database.js";
import Appropriations from './budget/Appropriations.js';

const { DataTypes } = Sequelize;

const Fasel = db.define("fasel", {
  appropriationId: {
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
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Appropriations.hasMany(Fasel);
Fasel.belongsTo(Appropriations, { 'foreignKey': 'appropriationId' })

// ParentBabs.hasMany(Fasel);
// Fasel.belongsTo(ParentBabs, { 'foreignKey': 'parentBabsId' });

export default Fasel;

// (
//   async() => {
//     await db.sync();
//   }
// )();