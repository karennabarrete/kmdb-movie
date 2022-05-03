const Usuario = require("../models/Usuario");



const usuarioController = {

    async listarUsuario(req,res) {
        try {
            const usuario = await Usuario.findAll();
            res.json (usuario);
            
        } catch (error) {
            return res.status (400).json({message: err.message});
        }

    },

    async criarUsuario(req,res) {
        try {
            let { id_usuario, nome_usuario, email_usuario } = req.body;

            const criarUsuario = await Usuario.create({
                id_usuario, 
                nome_usuario, 
                email_usuario,
            });
            return res.status(200).json({message: "Usuario Cadastrado."});
            
        } catch (error) {
            return res.status (400).json({message: err.message});            
        }

    },

    async updateUsuario(req,res) {
        try {
            const { id_usuario } = req.params;

            const updateUsuario = await Usuario.update({
                nome_usuario, 
                email_usuario,
            });
            return res.status(201).json({message: "Dados atualizados com sucesso!"});
            
        } catch (error) {
            console.log(error);          
        }

    },

    async deleteUsuario(req,res) {
        try {
            const { id_usuario } = req.params;

            const deleteUsuario = await Usuario.findByPk(id_usuario);

            deleteUsuario.destroy({where: {id: req.params.id}});
            
            return res.status(200).json({message: "Usuario deletado."});
            
        } catch (error) {
            console.log(error);        
        }

    },



};                                          

module.exports = usuarioController;