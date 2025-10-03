//logoff da oficina
const btn = document.getElementById("btnLogout")
btn.addEventListener("click", function () {

    window.sessionStorage.clear()
    window.localStorage.clear()
    window.location.href = '/'
})