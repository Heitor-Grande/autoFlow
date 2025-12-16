const nome = document.querySelector("#nome")
const veiculo = document.querySelector("#veiculo")
const anoVeiculo = document.querySelector("#ano")
const placaVeiculo = document.querySelector("#placa")
const numeroTelefone = document.querySelector("#telefone")

//btn de cadastrar
const btnCadastrar = document.querySelector("#btnCadastrar")

//evento do form - submit
const form = document.querySelector("#formCadCliente")
form.addEventListener("submit", async function (e) {
    e.preventDefault()

    await cadastrarCliente()
})

async function cadastrarCliente() {

    try {


        const cliente = {
            nome: nome.value,
            veiculo: veiculo.value,
            anoVeiculo: anoVeiculo.value,
            placaVeiculo: placaVeiculo.value,
            numeroTelefone: numeroTelefone.value
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
            window.location = "/oficina/main"
        }
        else {

            alert("Erro ao tentar Cadastrar --> " + responseJson.message)
        }
    } catch (error) {

        console.log(error)
        alert("Erro ao tentar cadastrar cliente.")
    }
}
