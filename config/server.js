module.exports = function () {
    var express = require('express');
    var consign = require('consign');
    var body = require('body-parser');
    var expressValidator = require('express-validator');

    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', 'app/views');

    app.use(body.urlencoded({ extended: true }));
    app.use(expressValidator());

    consign()
        .include('app/routes')
        .then('app/models')
        .then('app/controllers')
        .then('config/dbConnection.js')
        .into(app);

    app.listen(4000, function () {
        console.log('rodando');
    });
}