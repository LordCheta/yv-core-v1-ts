import mysql from "mysql2/promise";
import config from "../config";
import knex from "knex";

// const connection = mysql.createPool({
//     host: config.mysql.host,
//     user: config.mysql.user,
//     password: config.mysql.password,
//     database: config.mysql.database,
//     waitForConnections: config.mysql.waitForConnections,
//     connectionLimit: config.mysql.connectionLimit,
//     queueLimit: config.mysql.queueLimit
// });

const connection = require('knex')({
    client: 'mysql',
    connection: {
        host : config.mysql.host,
        port : 3306,
        user : config.mysql.user,
        password : config.mysql.password,
        database : config.mysql.database
    },
    pool: {
        min: 0,
        max: config.mysql.connectionLimit
    }
});



// const connect =  async () => {
//     try {
//         await connection.getConnection()
//         console.log("Database Connected")
//     } catch (e) {
//         console.log("DB connection failed: ",e);
//     }
// }


const mysqlInstance = {
    connection,
    // connect
};

export default mysqlInstance
