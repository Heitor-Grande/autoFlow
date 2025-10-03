const express = require("express")
const menuPrincipalPage = require("../../controllers/menuPrincipal/menuPrincipal.controller")
const menuPrincipalRouter = express.Router()

menuPrincipalRouter.get("/menu/principal/oficina", menuPrincipalPage)

module.exports = menuPrincipalRouter