const db = require("../database");
const { DataTypes } = require("sequelize");

const Elenco = db.define(
    "Elenco", 
    {
        id_elenco: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        diretor: {
            type: DataTypes.STRING,
        },
        roteirista: {
            type: DataTypes.STRING,
        },
        atores: {
            type: DataTypes.STRING,
        },
                
    }, 
    {
    tableName: "elenco",
    timestamps: false,
    }
);

module.exports = Elenco;