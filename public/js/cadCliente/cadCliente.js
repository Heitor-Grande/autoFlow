const oficina = document.querySelector("#oficina")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const numeroTelefone = document.querySelector("#telefone")
const senha = document.querySelector("#senhaPigente")

//evento do form - submit
const form = document.querySelector("#formCadCliente")
form.addEventListener("submit", async function (e) {
    e.preventDefault()

    await cadastrarCliente()
})

async function cadastrarCliente() {

    try {


        const cliente = {
            oficina: oficina.value,
            nome: nome.value,
            email: email.value,
            numeroTelefone: numeroTelefone.value,
            senha: senha.value
        }

        const token = localStorage.getItem("token")

        const response = await fetch("/add/new/cliente", {
            method: "POST",
            headers: {
                Authorization: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cliente)
        })

        const responseJson = await response.json()

        if (responseJson.success) {

            alert(responseJson.message)
            window.location = "/"
        }
        else {

            alert("Erro ao tentar Cadastrar --> " + responseJson.message)
        }
    } catch (error) {
        console.log(error)
        alert("Erro ao tentar cadastrar cliente.")
    }
}
