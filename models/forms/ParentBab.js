import { Sequelize } from "sequelize";
import db from "../../config/Database.js";

const { DataTypes } = Sequelize;

const ParentBabs = db.define("parentbabs", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  kind_of: {
    type: DataTypes.STRING,
    allowNull: false
  },
  kind_of_budget: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default ParentBabs;

// (
//   async() => {
//     await db.sync();
//   }
// )();