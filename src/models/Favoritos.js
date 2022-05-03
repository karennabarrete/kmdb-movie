const db = require("../database");
const { DataTypes } = require("sequelize");
const Atracao = require("../models/Atracao");
const Usuario = require("../models/Usuario");


const Favoritos = db.define(
    "Favoritos", 
    {
        atracao_id_atracao: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Atracao,
                key: 'id_atracao',
            
        }},
        usuario_id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Usuario,
                key: 'id_usuario',
        }},
        

                
    }, 
    {
    tableName: "favoritos",
    timestamps: false,
    }
);

module.exports = Favoritos;