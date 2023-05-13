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
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    timezone: true,
  },
  tariff_num: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  tariff_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    timezone: true,
  },
  pendant_num: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true
  },
  pendant_date: {
    type: DataTypes.DATE,
    allowNull: true,
    timezone: true,
  },
  remark: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default IdCard;

(
  async () => {
    await db.sync();
  }
)();