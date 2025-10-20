const express = require("express")
const pageListaCliente = require("../../controllers/listaCliente/listaCliente.controller")
const listaClienteRouter = express.Router()

listaClienteRouter.get("/lista/clientes", pageListaCliente)


module.exports = listaClienteRouter