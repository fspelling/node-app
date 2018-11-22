module.exports.index = function (app, req, res) {
    var con = app.config.dbConnection();
    var nome = req.params.nome;
    var clienteModel = app.app.models.clienteModel(con);

    if (nome != undefined)
        clienteModel.getByNome(res, nome);
    else
        clienteModel.all(res);
}

module.exports.novo = function (app, req, res) {
    res.render('cadastro', { validacao: {}, dados: {} });
}

module.exports.gravar = function (app, req, res) {
    var dados = req.body;

    req.assert('nome', 'nome eh obrigatorio').notEmpty();
    req.assert('email', 'email eh obrigatorio').notEmpty();

    var erro = req.validationErrors();

    if (erro) {
        res.render('cadastro', { validacao: erro, dados: dados });
        return;
    }
    var con = app.config.dbConnection();
    var clienteModel = app.app.models.clienteModel(con);

    clienteModel.novo(res, dados);
}
