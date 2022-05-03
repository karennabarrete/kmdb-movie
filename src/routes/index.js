const express = require("express");
const atracaoController = require("../controllers/atracaoController");
const usuarioController = require("../controllers/usuarioController");

const routes = express.Router();

routes.get ("/atracoes", atracaoController.listarAtracoes);
routes.get ("/favoritos", atracaoController.listarFavoritos);
routes.post ("/favoritos", atracaoController.criarFavoritos);
routes.delete ("/favoritos", atracaoController.deleteFavoritos);

routes.get ("/usuario", usuarioController.listarUsuario);
routes.post ("/usuario", usuarioController.criarUsuario);
routes.put ("/usuario/:id", usuarioController.updateUsuario);
routes.delete ("/usuario/:id", usuarioController.deleteUsuario);


module.exports = routes;