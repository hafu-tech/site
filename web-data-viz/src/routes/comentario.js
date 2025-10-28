var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

router.get("/listar", function (req, res) {
    comentarioController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    comentarioController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    comentarioController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    comentarioController.publicar(req, res);
});

router.put("/editar/:idComentario", function (req, res) {
    comentarioController.editar(req, res);
});

router.delete("/deletar/:idComentario", function (req, res) {
    comentarioController.deletar(req, res);
});

module.exports = router;