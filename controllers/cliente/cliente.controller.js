const connection = require("../../database/connection")
const { gerarHash, criptografar } = require("../../security/security")

//função responsável por renderizar a página .handlebars
async function cadClientePage(req, res) {

    const sqlSelect = `
            SELECT cnpj, fantasia FROM public.cliente
            WHERE ativo = true
        `

    const clientes = await connection.query(sqlSelect)

    return res.render("cadCliente", {

        oficinas: clientes.rows
    })
}

//função responsável pelo cadastro de cliente
async function cadCliente(req, res) {

    try {

        const { nome, numeroTelefone, email, senha, cpf } = req.body


        const sqlInsert = `
        INSERT INTO public.clientecliente
            (cnpj_cliente, nome, telefone, email, senha, cpf)
            VALUES($1, $2, $3, $4, $5, $6)
        `

        await connection.query(sqlInsert, [req.cnpj_cliente, nome, numeroTelefone, email, (await gerarHash(senha)).hash, criptografar(cpf).dadoCriptografado])

        return res.status(201).json({
            success: true,
            message: "Cadastrado com Sucesso."
        })
    } catch (error) {

        
        return res.status(500).json({
            success: false,
            message: "Erro ao tentar cadastrar novo cliente.",
            error: error.message
        })
    }
}

module.exports = { cadClientePage, cadCliente }