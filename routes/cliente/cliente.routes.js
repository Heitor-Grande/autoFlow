const express = require("express")
const cadClientePage = require("../../controllers/cliente/cliente.controller")
const routerCliente = express.Router()

routerCliente.get("/cad/new/cliente", cadClientePage)

module.exports = routerCliente