const Atracao = require("../models/Atracao");
const Tipo_atracao = require("../models/Tipo_atracao");
const Genero = require("../models/Genero");
const Elenco = require("../models/Elenco");



const atracaoController = {

    async listarAtracoes(req,res) {
        try {
            const atracao = await Atracao.findAll ({where: {id_atracao: req.params.id}});
            res.json (atracao);
            
        } catch (error) {
            console.log (error);
        }

    },



};                                          

module.exports = atracaoController;