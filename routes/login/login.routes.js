const express = require("express")
const { loginPage, executarLogin } = require("../../controllers/login/login.controller")
const loginRouter = express.Router()

loginRouter.get("/", loginPage)

loginRouter.post("/executar/login", executarLogin)

module.exports = loginRouter