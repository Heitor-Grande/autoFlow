const { validarJWT } = require("../../security/security")

async function validarUsuarioLogado(req, res) {
    try {

        const { token } = req.params

        const tokenIsValido = validarJWT(token)

        if (tokenIsValido.success) {

            return res.status(200).send({
                success: true,
                message: "Usuário com token válido",
                info: tokenIsValido
            })
        }
        else {

            return res.status(401).send({
                success: false,
                message: tokenIsValido.message
            })
        }
    } catch (error) {

        return res.status(500).send({
            success: false,
            message: "Usuário corrompido ou Login Expirado. Faça o Login Novamente."
        })
    }
}

module.exports = { validarUsuarioLogado }