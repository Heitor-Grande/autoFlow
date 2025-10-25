const app = require("./app")

const porta = process.env.PORT || 3000

app.listen(porta, function () {
    console.log("aplicação rodando em : http://localhost:" + porta)
})