const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const path = require("path")
const handlebars = require("express-handlebars")
const app = express()
const {
    loginRouter,
    menuPrincipalRouter,
    routerCliente,
    servicoRouter,
    listaClienteRouter
} = require("./routes/index")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//configurando o handlebars
app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars")
app.set("views", path.join(process.cwd(), "public/views"))

// servir arquivos estáticos da pasta public
app.use(express.static(path.join(process.cwd(), "public")))

//login
app.use(loginRouter)

//menu principal
app.use(menuPrincipalRouter)

//cadastro do cliente
app.use(routerCliente)

//servico
app.use(servicoRouter)

//lista cliente
app.use(listaClienteRouter)

module.exports = app