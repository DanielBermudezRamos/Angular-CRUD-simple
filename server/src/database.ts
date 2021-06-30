import mysql from 'mysql';
// import { createPool } from 'promise-mysql'; // <-- muestra un error porque utiliza el modulo Bluebird
import keys from './keys';

const pool = mysql.createPool(keys.database);

/* Esta es la estructura del ejercicio, para promise-mysql
pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB está Conectada');
    });

*/
pool.getConnection((err, connection) => {
    if (err) throw err; connection.release(); 
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

export default pool;