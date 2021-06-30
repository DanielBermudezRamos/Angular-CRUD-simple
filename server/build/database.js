"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
// import { createPool } from 'promise-mysql'; // <-- muestra un error porque utiliza el modulo Bluebird
const keys_1 = __importDefault(require("./keys"));
const pool = mysql_1.default.createPool(keys_1.default.database);
/* Esta es la estructura del ejercicio, para promise-mysql
pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB está Conectada');
    });

*/
pool.getConnection((err, connection) => {
    if (err)
        throw err;
    connection.release();
    console.log('DB está conectada');
    /*
    const consulta = pool.query('DESCRIBE games', function (err, result) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result));
    
    });
    */
});
/*

*/
exports.default = pool;
