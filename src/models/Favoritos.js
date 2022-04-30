const db = require("../database");
const { DataTypes } = require("sequelize");

const Favoritos = db.define(
    "Favoritos", 
    {
        id_atracao: {
            type: DataTypes.INTEGER,
            references: {
                model: atracao,
                key: 'id',
        }},
        id_usuario: {
            type: DataTypes.INTEGER,
            references: {
                model: usuario,
                key: 'id',
        }},
        

                
    }, 
    {
    tableName: "favoritos",
    timestamps: false,
    }
);

module.exports = Favoritos;