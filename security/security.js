const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

//gera o JWT de login do cliente
function gerarJWT(email, cnpj, key) {

    try {

        const token = jwt.sign({ email, cnpj, key }, process.env.JWT_KEY, { expiresIn: process.env.JWT_TIME })

        return {
            success: true,
            token: token
        }
    } catch (error) {

        return {
            success: false,
            message: "Erro ao gerar token de validação."
        }
    }
}


//gerar hash
async function gerarHash(texto) {

    try {

        const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALTROUNDS))

        const hash = await bcrypt.hash(texto, salt)

        return {
            success: true,
            hash: hash
        }
    } catch (error) {

        return {
            success: false,
            error: error
        }
    }
}

//validar hash
async function validarHash(texto, hash) {

    try {

        const valido = await bcrypt.compare(texto, hash)

        if (valido) {

            return {
                success: true,
                message: "HASH válido"
            }
        }
        else {

            return {
                success: false,
                error: "HASH não válido"
            }
        }

    } catch (error) {

        return {
            success: false,
            error: error
        }
    }
}


module.exports = { gerarJWT, gerarHash, validarHash }