import dotenv from 'dotenv';

// Initialize env
dotenv.config();

const ENV = process.env;


const SERVER = {
    port: ENV.SERVER_PORT || 8003,
    hostname: ENV.HOST || 'localhost'
}

const MYSQL = {
    host: ENV.MYSQL_HOST || "localhost",
    user: ENV.MYSQL_USER || "root",
    password: ENV.MYSQL_PASSWORD || "",
    database: ENV.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}

const Index = {
    server: SERVER,
    mysql: MYSQL
}

export default Index;
