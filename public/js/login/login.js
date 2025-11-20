const email = document.querySelector("#email")
const senha = document.querySelector("#password")

const formLogin = document.getElementById("loginEvent")
formLogin.addEventListener("submit", function (e) {

    e.preventDefault()

    login()
})

async function login() {

    try {

        const login = {
            senha: senha.login,
            email: senha.login
        }

        const response = await fetch("/login/cliente", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(login)
        })

        const responseJson = await response.json()

        if (responseJson.success) {

            window.location.href = '/oficina/main'
        }
        else {

            alert(responseJson.message)
        }
    } catch (error) {

        alert("Erro ao fazer Login")
    }
}