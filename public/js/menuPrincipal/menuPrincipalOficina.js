const btnlistaClientes = document.getElementById("listaClientes")
btnlistaClientes.addEventListener("click", function () {

    window.location.href = "/lista/clientes"
})

const btnServicos = document.getElementById("servicos")
btnServicos.addEventListener("click", function () {

    window.location.href = "/servico/gerais"
})

//logoff da oficina
const btn = document.getElementById("btnLogout")
btn.addEventListener("click", function () {

    window.sessionStorage.clear()
    window.localStorage.clear()
    window.location.href = '/'
})