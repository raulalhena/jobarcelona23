import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import UserModel from "../models/User.js";

dotenv.config();

// Set sequelize con los datos de la BBDD
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSW, {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    logging: false
});

// Instancia del modelo User
const User = UserModel(sequelize, Sequelize);

/**
 *  Sincronización de la tabla de 'users'
 */

await sequelize.sync({ force: true});
console.log("#JoBarcelona23: => Table 'users' syncronized");

export { User, sequelize };