const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const cryptoJS = require("crypto-js")

//função para criptografra dados
function criptografar(dado) {

    try {

        const dadoCriptografado = cryptoJS.AES.encrypt(dado, process.env.CRYPTOJS_KEY).toString()
        return {
            success: true,
            dadoCriptografado: dadoCriptografado
        }
    } catch (error) {

        return {
            success: false,
            message: "Erro ao aplicar Segurança."
        }
    }
}

//função para descriprografar
function descriptografar(dadoCriptografado) {

    try {

        const dado = cryptoJS.AES.decrypt(dadoCriptografado, process.env.CRYPTOJS_KEY).toString(CryptoJS.enc.Utf8)

        return {
            success: true,
            dado: dado
        }
    } catch (error) {

        return {
            success: false,
            message: "Erro ao Consultar Informação real."
        }
    }
}


//gera o JWT de login do cliente
function gerarJWT(email, cnpj, key, fantasia) {

    try {

        const token = jwt.sign({ email, cnpj, key, fantasia }, process.env.JWT_KEY, { expiresIn: process.env.JWT_TIME })

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

//validar jwt, essa função é criada para o navBar, ao recarregar a tela roda essa função.
//criada para expulsar usuarios invalidos da aplicação
function validarJWT(token) {
    try {

        const tokenValido = jwt.verify(token, process.env.JWT_KEY)

        if (tokenValido) {

            return {
                success: true,
                message: "Token Válido.",
                cnpj: tokenValido.cnpj,
                fantasia: tokenValido.fantasia
            }
        }
    } catch (error) {

        return {
            success: false,
            message: "Erro ao validar token."
        }
    }
}

//validar jwt routes
function validarJWTroutes(req, res, next) {
    try {

        const token = req.headers.authorization

        const tokenValido = jwt.verify(token, process.env.JWT_KEY)

        if (tokenValido) {

            req.cnpj_cliente = tokenValido.cnpj
            next()
        }
    } catch (error) {

        return res.status(401).send({
            success: false,
            message: "Token Inválido"
        })
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


module.exports = { gerarJWT, gerarHash, validarHash, validarJWT, validarJWTroutes, criptografar, descriptografar }