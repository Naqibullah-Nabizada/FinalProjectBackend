import { Sequelize } from "sequelize";
import db from "../../config/Database.js";
import ParentBabs from "./ParentBab.js";

const { DataTypes } = Sequelize;

const ChildBabs = db.define("childbabs", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parentBabsId:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

ParentBabs.hasMany(ChildBabs);
ChildBabs.belongsTo(ParentBabs, {'foreignKey': 'parentBabsId'});

export default ChildBabs;

// (
//   async() => {
//     await db.sync();
//   }
// )();