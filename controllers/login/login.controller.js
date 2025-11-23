const connection = require("../../database/connection")
const { validarHash, gerarJWT } = require("../../security/security")

function loginPage(req, res) {

    return res.render("login")
}

async function executarLogin(req, res) {

    try {

        const { email, senha } = req.body

        const queryDB = `
            SELECT senha, cnpj, key, fantasia FROM cliente WHERE email = $1
        `

        const cliente = await connection.query(queryDB, [email])

        if (cliente.rows.length === 1) {

            const clienteData = cliente.rows[0]

            const hashValido = await validarHash(senha, clienteData.senha)

            if (hashValido.success) {

                const jwt = gerarJWT(email, clienteData.cnpj, clienteData.key, clienteData.fantasia)

                if (jwt.success) {

                    return res.status(201).json({
                        success: true,
                        redirectTo: "/oficina/main",
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

        return res.status(500).json({
            success: false,
            message: "Erro ao tentar fazer Login."
        })
    }
}

module.exports = { loginPage, executarLogin }