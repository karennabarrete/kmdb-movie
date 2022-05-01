const db = require("../database");
const { DataTypes } = require("sequelize");
const Tipo_atracao = require("./Tipo_atracao");
const Genero = require("./Elenco");
const Elenco = require("./Elenco");

const Atracao = db.define(
    "Atracao", 
    {
        id_atracao: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_atracao: {
            type: DataTypes.STRING,
        },
        titulo_original: {
            type: DataTypes.STRING,
        },
        data_atracao: {
            type: DataTypes.DATE,
        },
        enredo: {
            type: DataTypes.STRING,
        },
        duracao: {
            type: DataTypes.STRING,
        },
        popularidade: {
            type: DataTypes.STRING,
        },
        foto_principal: {
            type: DataTypes.STRING,
        },
        trailer: {
            type: DataTypes.STRING,
        },
        classificacao: {
            type: DataTypes.STRING,
        },
        tipo_atracao_id_tipo_atracao: {
            type: DataTypes.INTEGER,
            references: {
                model: Tipo_atracao,
                key: 'id',
        }},
        id_genero: {
            type: DataTypes.INTEGER,
            references: {
                model: Genero,
                key: 'id',
        }},
        id_elenco: {
            type: DataTypes.INTEGER,
            references: {
                model: Elenco,
                key: 'id',
        }},

                
    }, 
    {
    tableName: "atracao",
    timestamps: false,
    }
);

module.exports = Atracao;