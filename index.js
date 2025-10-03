const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const path = require("path")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//configurando o handlebars
const handlebars = require("express-handlebars")
app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars")
app.set("views", path.join(process.cwd(), "public/views"))

// servir arquivos estáticos da pasta public
app.use(express.static(path.join(process.cwd(), "public")))

//login
const login = require("./routes/login/login.routes")
app.use(login)

//menu principal
const menuPrincipal = require("./routes/menuPrincipal/menuPrincipal.routes")
app.use(menuPrincipal)

//cadastro do cliente
const routerCliente = require("./routes/cliente/cliente.routes")
app.use(routerCliente)


module.exports = app