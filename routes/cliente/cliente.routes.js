const express = require("express")
const { cadClientePage, cadCliente } = require("../../controllers/cliente/cliente.controller")
const { validarJWTroutes } = require("../../security/security")
const routerCliente = express.Router()

routerCliente.get("/cad/new/cliente", cadClientePage)
routerCliente.post("/add/new/cliente", validarJWTroutes, cadCliente)

module.exports = routerCliente