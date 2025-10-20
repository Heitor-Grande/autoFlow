const btnNovoCliente = document.getElementById("novoCliente")
btnNovoCliente.addEventListener("click", function () {

    window.location.href = "/cad/new/cliente"
})

const btnlistaClientes = document.getElementById("listaClientes")
btnlistaClientes.addEventListener("click", function () {

    window.location.href = "/lista/clientes"
})

const btnnovoServico = document.getElementById("novoServico")
btnnovoServico.addEventListener("click", function () {

    window.location.href = "/servico/gerais"
})