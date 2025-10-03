const express = require("express")
const menuPrincipalPage = require("../../controllers/menuPrincipal/menuPrincipal.controller")
const menuPrincipalRouter = express.Router()

menuPrincipalRouter.get("/oficina/main", menuPrincipalPage)

module.exports = menuPrincipalRouter