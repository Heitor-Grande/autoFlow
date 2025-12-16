const connection = require("../../database/connection")

//função responsável por renderizar a página .handlebars
function cadClientePage(req, res) {
    return res.render("cadCliente")
}

//função responsável pelo cadastro de cliente
async function cadCliente(req, res) {

    try {

        const { nome, veiculo, anoVeiculo, placaVeiculo, numeroTelefone } = req.body


        const sqlInsert = `
        
        INSERT INTO public.clientecliente
            (cnpj_cliente, nome, veiculo, anoveiculo, placa, telefone)
            VALUES($1, $2, $3, $4, $5, $6)
        `

        await connection.query(sqlInsert, [req.cnpj_cliente, nome, veiculo, anoVeiculo, placaVeiculo, numeroTelefone])

        return res.status(201).json({
            success: true,
            message: "Sucesso ao cadastrar novo cliente."
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