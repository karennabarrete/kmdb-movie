const Atracao = require("../models/Atracao");
const Tipo_atracao = require("../models/Tipo_atracao");
const Genero = require("../models/Genero");
const Elenco = require("../models/Elenco");
const Favoritos = require("../models/Favoritos");



const atracaoController = {

    async listarAtracoes(req,res) {
        try {
            const atracao = await Atracao.findAll();
            res.json (atracao);
            
        } catch (error) {
            console.log (error);
        }

    },

    async listarFavoritos(req,res) {
        try {
            let favoritos = await Favoritos.findAll();
            res.json (favoritos);
            
        } catch (error) {
            console.log (error);
        }

    },

    async criarFavoritos(req,res) {
        try {
            const { atracao_id_atracao, usuario_id_usuario } = req.body;

            let favoritos = await Favoritos.create({
                atracao_id_atracao, 
                usuario_id_usuario,
            });
            return res.status(201).json(favoritos);
            
        } catch (error) {
            console.log(error);            
        }

    },



};                                          

module.exports = atracaoController;