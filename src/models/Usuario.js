const db = require("../database");
const { DataTypes } = require("sequelize");

const Usuario = db.define(
    "Usuario", 
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_usuario: {
            type: DataTypes.STRING,
        },
        email_usuario: {
            type: DataTypes.STRING,
        },
                        
    }, 
    {
    tableName: "usuario",
    timestamps: false,
    }
);

module.exports = Usuario;