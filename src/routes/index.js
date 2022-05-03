const express = require("express");
const atracaoController = require("../controllers/atracaoController");
const usuarioController = require("../controllers/usuarioController");
const passport = require("passport");
const auth = require("../middlewares/auth");


const routes = express.Router();

routes.get ("/atracoes", atracaoController.listarAtracoes);
routes.get ("/favoritos", atracaoController.listarFavoritos);
routes.post ("/favoritos", atracaoController.criarFavoritos);
routes.delete ("/favoritos", atracaoController.deleteFavoritos);

routes.get ("/usuario", usuarioController.listarUsuario);
routes.post ("/usuario", usuarioController.criarUsuario);
routes.put ("/usuario/:id", usuarioController.updateUsuario);
routes.delete ("/usuario/:id", usuarioController.deleteUsuario);

routes.get ("/auth/google", passport.authenticate("google", { scope: ["email", "profile"]}));
routes.get ("/google/callback", passport.authenticate("google", { successRedirect: "/protected", failureRedirect: "/auth/failure" }));
routes.get ("/protected", ) //colocar o token aqui
routes.get ("/auth/failure", ) //colocar o token aqui



module.exports = routes;