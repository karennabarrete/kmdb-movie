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
            return res.status (400).json({message: err.message});
        }

    },

    async listarFavoritos(req,res) {
        try {
            const favoritos = await Favoritos.findAll();
            res.json (favoritos);
            
        } catch (error) {
            return res.status (400).json({message: err.message});
        }

    },

    async criarFavoritos(req,res) {
        try {
            const { atracao_id_atracao, usuario_id_usuario } = req.body;

            const criarFavoritos = await Favoritos.create({
                atracao_id_atracao, 
                usuario_id_usuario,
            });
            return res.status(200).json({message: "Atração adicionada aos favoritos."});
            
        } catch (error) {
            return res.status (400).json({message: err.message});            
        }

    },

    async updateFavoritos(req,res) {
        try {
            const { atracao_id_atracao, usuario_id_usuario } = req.body;

            const updateFavoritos = await Favoritos.update({
                atracao_id_atracao, 
                usuario_id_usuario,
            });
            return res.status(201).json({message: "Atração atualizada com sucesso!"});
            
        } catch (error) {
            return res.status (400).json({message: err.message});            
        }

    },

    async deleteFavoritos(req,res) {
        try {
            const { atracao_id_atracao } = req.params;

            const deleteFavoritos = await Favoritos.findByPk(id);

            deleteFavoritos.destroy({where: {id: req.params.id}});
            
            return res.status(200).json({message: "Atração deletada."});
            
        } catch (error) {
            return res.status (400).json({message: err.message});            
        }

    },



};                                          

module.exports = atracaoController;