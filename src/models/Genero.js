const db = require("../database");
const { DataTypes } = require("sequelize");

const Genero = db.define(
    "Genero", 
    {
        id_genero: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_genero: {
            type: DataTypes.STRING,
        },
                
    }, 
    {
    tableName: "genero",
    timestamps: false,
    }
);

module.exports = Genero;