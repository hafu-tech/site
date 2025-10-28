var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    console.log("passei aqui")
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    console.log("passei aqui no .js")
    usuarioController.autenticar(req, res);
});

router.put("/editar/:idUsuario", function (req, res) {
    usuarioController.editar(req, res);
});

router.delete("/deletar/:idUsuario", function (req, res) {
    usuarioController.deletar(req, res);
});

module.exports = router;