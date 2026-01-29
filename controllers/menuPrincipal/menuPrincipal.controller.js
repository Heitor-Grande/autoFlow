function menuPrincipalPage(req, res) {


    return res.render("menuPrincipalOficina")
}


function menuPrincipalPageCliente(req, res) {


    return res.render("menuPrincipalCliente")
}

module.exports = { menuPrincipalPage, menuPrincipalPageCliente }