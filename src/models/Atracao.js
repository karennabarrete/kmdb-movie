const db = require("../database");
const { DataTypes } = require("sequelize");

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
        id_tipo_atracao: {
            type: DataTypes.INTEGER,
            references: {
                model: tipo_atracao,
                key: 'id',
        }},
        id_genero: {
            type: DataTypes.INTEGER,
            references: {
                model: genero,
                key: 'id',
        }},
        id_elenco: {
            type: DataTypes.INTEGER,
            references: {
                model: elenco,
                key: 'id',
        }},

                
    }, 
    {
    tableName: "atracao",
    timestamps: false,
    }
);

module.exports = Atracao;