const formLogin = document.getElementById("loginEvent")
formLogin.addEventListener("submit", function (e) {
    e.preventDefault()
    window.location.href = '/oficina/main'
})