async function validarLoginUsuario() {

    try {

        const token = localStorage.getItem("token")

        if (token) {

            const response = await fetch(`/validar/usuario/logado`, {
                method: "GET",
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json"
                }
            })

            const responseJson = await response.json()

            if (responseJson.success === false) {

                window.sessionStorage.clear()
                window.localStorage.clear()
                window.location.href = '/'
            }
            else {

                const fantasia = document.querySelector("#fantasia")
                const cnpj = document.querySelector("#cnpj")

                fantasia.textContent = responseJson.info.fantasia ? responseJson.info.fantasia : responseJson.info.nome
                cnpj.textContent = responseJson.info.cnpj ? responseJson.info.cnpj : ''
            }
        }
        else {

            window.sessionStorage.clear()
            window.localStorage.clear()
            window.location.href = '/'
        }
    } catch (error) {

        alert("Tytes ERROR - 401 - Message")
        window.sessionStorage.clear()
        window.localStorage.clear()
        window.location.href = '/'
    }
}

document.addEventListener("DOMContentLoaded", validarLoginUsuario)