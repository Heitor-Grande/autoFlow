const nome = document.querySelector("#nome")
const veiculo = document.querySelector("#veiculo")
const anoVeiculo = document.querySelector("#ano")
const placaVeiculo = document.querySelector("#placa")
const numeroTelefone = document.querySelector("#telefone")

//evento do form - submit
const form = document.querySelector("#formCadCliente")
form.addEventListener("submit", function (e) {
    e.preventDefault()

    cadastrarCliente()
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

        const response = await fetch("/add/new/cliente", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cliente)
        })

        const responseJson = await response.json()

        if (responseJson.success) {

            alert(responseJson.message)
        }
        else {
            
            alert("ERRO ---> " + responseJson.message)
        }
    } catch (error) {

        console.log(error)
        alert("Erro ao tentar cadastrar cliente.")
    }
}
