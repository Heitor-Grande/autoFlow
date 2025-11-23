//logoff da oficina
const btn = document.getElementById("btnLogout")
btn.addEventListener("click", function () {

    window.sessionStorage.clear()
    window.localStorage.clear()
    window.location.href = '/'
})


async function validarLoginUsuario() {

    try {

        const token = localStorage.getItem("token")

        if (token) {

            const response = await fetch(`/validar/usuario/logado/${token}`, {
                method: "GET"
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

                fantasia.textContent = responseJson.info.fantasia
                cnpj.textContent = responseJson.info.cnpj
            }
        }

    } catch (error) {

        alert("Tytes ERROR - 401 - Message")
        window.sessionStorage.clear()
        window.localStorage.clear()
        window.location.href = '/'
    }
}

document.addEventListener("DOMContentLoaded", validarLoginUsuario)