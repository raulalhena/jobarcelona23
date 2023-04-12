import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("mysql::memory:");
const type = DataTypes;

// Definición del modelo de usuario
const User = (sequelize, type) => {
    return sequelize.define("User", {
        userId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        login: {
            type: type.STRING
        },
        email: {
            type: type.STRING,
        },
        githubId: {
            type: type.STRING,
            unique: true
        },
        token: {
            type: type.STRING
        }
    });
}

export default User;