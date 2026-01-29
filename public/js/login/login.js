const email = document.querySelector("#email")
const senha = document.querySelector("#password")

const formLogin = document.getElementById("loginEvent")

const btnCriarConta = document.querySelector("#btnCriarConta")

function criarContaNavigate(e) {

    try {
        e.preventDefault()
        window.location.href = '/cad/new/cliente'

    } catch (error) {

        alert("Erro ao abrir Aba.")
    }
}
btnCriarConta.addEventListener("click", criarContaNavigate)

async function login(e) {

    try {

        e.preventDefault()

        const login = {
            senha: senha.value,
            email: email.value
        }

        const response = await fetch("/executar/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(login)
        })

        const responseJson = await response.json()

        if (responseJson.success) {

            localStorage.setItem("token", responseJson.token)
            window.location.href = responseJson.redirectTo
        }
        else {

            alert(responseJson.message)
        }
    } catch (error) {

        alert("Erro ao fazer Login")
    }
}
formLogin.addEventListener("submit", login)