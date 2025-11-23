const { validarUsuarioLogado } = require("../../controllers/navbar/narvBar.controller")

const routeNavbar = require("express").Router()

routeNavbar.get("/validar/usuario/logado/:token", validarUsuarioLogado)

module.exports = routeNavbar
