
import path from 'path';
import { fileURLToPath } from 'url';
import winston from 'winston';

const { createLogger, format, transports } = winston;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logsDirectory = path.join(__dirname, 'Finanace-Logs');

const getLogFilePath = (logFileName) => {
  return path.join(logsDirectory, logFileName);
};

const logger = (logFileName) => {
  const logFilePath = getLogFilePath(logFileName);

  return createLogger({
    level: 'info',
    format: format.combine(format.timestamp(), format.json()),
    transports: [
      new transports.Console(),
      new transports.File({ filename: logFilePath }),
    ],
  });
};
export default logger;
// import { Sequelize } from "sequelize";
// import db from "../config/Database.js";

// import User from "./userModel.js";

// const { DataTypes } = Sequelize;

// const Logs = db.define("logs", {
//   timestamp: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: Sequelize.NOW,
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   action: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   table_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   recordId: {
//     type: DataTypes.INTEGER,
//   },
// }, {
//   freezeTableName: true,
// })

// User.hasMany(Logs);
// Logs.belongsTo(User, { 'foreignKey': 'userId' });

// export default Logs;

// // (
// //   async() => {
// //     await db.sync();
// //   }
// // )();