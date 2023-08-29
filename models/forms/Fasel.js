import { Sequelize } from "sequelize";
import db from "../../config/Database.js";
import ChildBabs from "./ChildBab.js";

const { DataTypes } = Sequelize;

const Fasels = db.define("fasels", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description:{
    type: DataTypes.TEXT
  },
  childBabsId:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

ChildBabs.hasMany(Fasels);
Fasels.belongsTo(ChildBabs, {'foreignKey': 'childBabsId'});

export default Fasels;

// (
//   async() => {
//     await db.sync();
//   }
// )();