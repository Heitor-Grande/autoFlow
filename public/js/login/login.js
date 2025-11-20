const formLogin = document.getElementById("loginEvent")
formLogin.addEventListener("submit", function (e) {

    e.preventDefault()

    login()
})

async function login() {
    
    try {

        window.location.href = '/oficina/main'
    } catch (error) {

        
    }
}