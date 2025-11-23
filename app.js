const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const path = require("path")
const handlebars = require("express-handlebars")
const app = express()
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")

app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//configuração do rateLimit
const globalLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutos
    max: 50, // Cada IP pode fazer 50 requisições a cada 10 minutos
    standardHeaders: true, // Retorna RateLimit-* headers
    legacyHeaders: false,  // Remove X-RateLimit-* headers (deprecated)
    message: "Muitas requisições do mesmo IP."
})

app.use(globalLimiter)

//configurando o handlebars
app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars")
app.set("views", path.join(process.cwd(), "public/views"))

// servir arquivos estáticos da pasta public
app.use(express.static(path.join(process.cwd(), "public")))

//routes
const {
    loginRouter,
    menuPrincipalRouter,
    routerCliente,
    servicoRouter,
    listaClienteRouter,
    routeNavbar
} = require("./routes/index")

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

//navbar - valida login do usuario
app.use(routeNavbar)

module.exports = app