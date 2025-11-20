//função responsável por renderizar a página .handlebars
function cadClientePage(req, res) {
    return res.render("cadCliente")
}

//função responsável pelo cadastro de cliente
async function cadCliente(req, res) {

    try {

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