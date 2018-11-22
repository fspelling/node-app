module.exports = function (con) {
    this._con = con;

    this.all = function (res) {
        this._con.open(function (erro, mongoClient) {
            mongoClient.collection('cliente', function (erro, collection) {
                collection.find({}).toArray(function (erro, result) {
                    dados = [];

                    if (result != undefined)
                        dados = result;

                    res.render('contato', { clientes: dados });
                });
            })
        });
    }

    this.getByNome = function (res, nome) {
        this._con.open(function (erro, mongoClient) {
            mongoClient.collection('cliente', function (erro, collection) {
                collection.find({ nome: { $eq: nome } }).toArray(function (erro, result) {
                    dados = [];

                    if (result != undefined)
                        dados = result;

                    res.render('contato', { clientes: dados });
                });
            })
        });
    }

    this.novo = function (res, body) {
        this._con.open(function (erro, mongoClient) {
            mongoClient.collection('cliente', function (erro, collection) {
                collection.insert(body, function (erro, records) {
                    if (erro != undefined)
                        res.send('ERRO');
                    else
                        res.redirect('/contato');
                });
            })
        });
    }

    return this;
}
