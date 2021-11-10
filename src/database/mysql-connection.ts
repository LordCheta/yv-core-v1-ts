import mysql from "mysql2/promise";
import config from "../config"

const connection = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    waitForConnections: config.mysql.waitForConnections,
    connectionLimit: config.mysql.connectionLimit,
    queueLimit: config.mysql.queueLimit
});



const connect =  async () => {
    try {
        await connection.getConnection()
        console.log("Database Connected")
    } catch (e) {
        console.log("DB connection failed: ",e);
    }
}


const mysqlInstance = {
    connection,
    connect
};

export default mysqlInstance
