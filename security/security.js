const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

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


//gerar hash
function gerarHash(texto) {

    try {

        const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALTROUNDS))

        const hash = bcrypt.hashSync(texto, salt)

        return {
            sucess: true,
            hash: hash
        }
    } catch (error) {

        return {
            sucess: false,
            error: error
        }
    }
}

//validar hash
function validarHash(texto, hash) {

    try {

        const valido = bcrypt.compareSync(texto, hash)

        if (valido) {

            return {
                sucess: true,
                error: "HASH válido"
            }
        }
        else {

            return {
                sucess: false,
                error: "HASH não válido"
            }
        }

    } catch (error) {

        return {
            sucess: false,
            error: error
        }
    }
}


module.exports = { gerarJWT, gerarHash, validarHash }