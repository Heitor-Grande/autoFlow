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