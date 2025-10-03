const express = require("express")
const servicoPage = require("../../controllers/servico/servico.controller")
const servicoRouter = express.Router()

servicoRouter.get("/servico/gerais", servicoPage)

module.exports = servicoRouter