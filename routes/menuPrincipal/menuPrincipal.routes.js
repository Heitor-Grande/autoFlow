const express = require("express")
const { menuPrincipalPage, menuPrincipalPageCliente } = require("../../controllers/menuPrincipal/menuPrincipal.controller")
const menuPrincipalRouter = express.Router()

menuPrincipalRouter.get("/oficina/main", menuPrincipalPage)
menuPrincipalRouter.get("/oficina/cliente/main", menuPrincipalPageCliente)

module.exports = menuPrincipalRouter