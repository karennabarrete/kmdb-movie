const db = require("../database");
const { DataTypes } = require("sequelize");

const Tipo_atracao = db.define(
    "Tipo_atracao", 
    {
        id_tipo_atracao: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_tipo_atracao: {
            type: DataTypes.STRING,
        },
                
    }, 
    {
    tableName: "tipo_atracao",
    timestamps: false,
    }
);

module.exports = Tipo_atracao;