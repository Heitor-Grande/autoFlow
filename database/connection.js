const pg = require("pg")

const connection = new pg.Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: parseInt(process.env.PORT_DB),
    database: process.env.DATABASE
})

connection.on("connect", function () {
    
    console.log("Pool conectado ao banco (conexão criada quando necessário)")
})

connection.on("error", function (err) {
    
    console.error("Erro no Pool:", err)
})

module.exports = connection