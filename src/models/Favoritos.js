const db = require("../database");
const { DataTypes } = require("sequelize");
const Atracao = require("../models/Atracao");
const Usuario = require("../models/Usuario");


const Favoritos = db.define(
    "Favoritos", 
    {
        atracao_id_atracao: {
            type: DataTypes.INTEGER,
            references: {
                model: Atracao,
                key: 'id',
        }},
        usuario_id_usuario: {
            type: DataTypes.INTEGER,
            references: {
                model: Usuario,
                key: 'id',
        }},
        

                
    }, 
    {
    tableName: "favoritos",
    timestamps: false,
    }
);

module.exports = Favoritos;