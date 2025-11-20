const jwt = require("jsonwebtoken")

//gera o JWT de login do cliente
function gerarJWT(email, cnpj, key) {
    try {

        const token = jwt.sign({ email, cnpj, key }, process.env.JWT_KEY, { expiresIn: process.env.JWT_TIME })

        return {
            sucess: true,
            token: token
        }

    } catch (error) {

        return {
            success: false,
            mesage: "Erro ao gerar token de validação."
        }
    }
}



module.exports = {gerarJWT}