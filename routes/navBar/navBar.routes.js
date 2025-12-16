const { validarUsuarioLogado } = require("../../controllers/navbar/narvBar.controller")
const { validarJWTroutes } = require("../../security/security")

const routeNavbar = require("express").Router()

routeNavbar.get("/validar/usuario/logado", validarJWTroutes, validarUsuarioLogado)

module.exports = routeNavbar
