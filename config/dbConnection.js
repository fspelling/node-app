var mongodb = require('mongodb');

var conn = function () {
    var db = new mongodb.Db('clientes', new mongodb.Server('localhost', 27017, {}), {});
    return db;
}

module.exports = function () {
    return conn;
}