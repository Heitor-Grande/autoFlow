const routerCliente = require("./cliente/cliente.routes")
const listaClienteRouter = require("./listaCliente/listaCliente.routes")
const loginRouter = require("./login/login.routes")
const menuPrincipalRouter = require("./menuPrincipal/menuPrincipal.routes")
const routeNavbar = require("./navBar/navBar.routes")
const servicoRouter = require("./servico/servico.routes")

module.exports = {
    servicoRouter,
    menuPrincipalRouter,
    loginRouter,
    listaClienteRouter,
    routerCliente,
    routeNavbar
}