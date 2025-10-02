const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const path = require("path")

const app = express()
const porta = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//configurando o handlebars
const handlebars = require("express-handlebars")
app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars")
app.set("views", path.join(process.cwd(), "public/views"))

// servir arquivos estáticos da pasta public
app.use(express.static(path.join(process.cwd(), "public")))

app.listen(porta, function () {
    console.log("aplicação rodando em : http://localhost:" + porta)
})

//tela de login
app.get("/", function (req, res) {
    return res.render("login")
})

