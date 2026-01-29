const connection = require("../../database/connection")
const { validarHash, gerarJWT } = require("../../security/security")

function loginPage(req, res) {

    return res.render("login")
}

async function executarLogin(req, res) {

    try {

        const { email, senha } = req.body

        const queryDB_oficina = `
            SELECT senha, cnpj, fantasia FROM public.cliente WHERE email = $1
        `

        const userOficina = await connection.query(queryDB_oficina, [email])

        const queryDB_cliente = `
            SELECT senha, nome, telefone, idclientecliente FROM public.clientecliente WHERE email = $1
        `

        const userCliente = await connection.query(queryDB_cliente, [email])

        const user = userOficina.rows.length > 0 ? userOficina : userCliente.rows.length > 0 ? userCliente : []

        if (user.rows && user.rows.length === 1) {

            const userData = user.rows[0]

            userData.userTipo = userOficina.rows.length > 0 ? 'oficina' : 'cliente'

            const hashValido = await validarHash(senha, userData.senha)

            if (hashValido.success) {

                let jwt = null
                if (userData.userTipo == 'oficina') {

                    jwt = gerarJWT(userData.userTipo, userData.cnpj, userData.fantasia)
                }
                else {

                    jwt = gerarJWT(userData.userTipo, userData.idclientecliente, userData.nome)
                }

                if (jwt.success) {

                    return res.status(201).json({
                        success: true,
                        redirectTo: userData.userTipo == 'oficina' ? "/oficina/main" : "/oficina/cliente/main",
                        token: jwt.token
                    })
                }
                else {

                    return res.status(500).json({
                        success: false,
                        message: "Erro ao gerar token de validação."
                    })
                }
            }
            else {

                return res.status(403).json({
                    success: false,
                    message: "E-mail ou senha inválidos.",
                    etapa: 2
                })
            }
        }
        else {

            return res.status(401).json({
                success: false,
                message: "E-mail ou senha inválidos.",
                etapa: 1
            })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Erro ao tentar fazer Login."
        })
    }
}

module.exports = { loginPage, executarLogin }