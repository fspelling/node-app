module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('home');
    });

    app.get('/contato', function (req, res) {
        app.app.controllers.cliente.index(app, req, res);
    });

    app.get('/contato/:nome', function (req, res) {
        app.app.controllers.cliente.index(app, req, res);
    });

    app.get('/cadastro', function (req, res) {
        app.app.controllers.cliente.novo(app, req, res);
    });

    app.post('/cadastro/gravar', function (req, res) {
        app.app.controllers.cliente.gravar(app, req, res);
    });
}