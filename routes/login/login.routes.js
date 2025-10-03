const express = require("express")
const loginPage = require("../../controllers/login/login.controller")
const loginRouter = express.Router()

loginRouter.get("/", loginPage)

module.exports = loginRouter