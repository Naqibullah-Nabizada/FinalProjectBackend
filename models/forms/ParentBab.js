import { Sequelize } from "sequelize";
import db from "../../config/Database.js";

const { DataTypes } = Sequelize;

const ParentBabs = db.define("parentbabs", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default ParentBabs;

// (
//   async() => {
//     await db.sync();
//   }
// )();