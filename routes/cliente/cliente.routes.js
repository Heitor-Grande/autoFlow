const express = require("express")
const { cadClientePage, cadCliente } = require("../../controllers/cliente/cliente.controller")
const routerCliente = express.Router()

routerCliente.get("/cad/new/cliente", cadClientePage)
routerCliente.post("/add/new/cliente", cadCliente)

module.exports = routerCliente