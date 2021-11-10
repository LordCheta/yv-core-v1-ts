import http from "http";
import express from "express";
import { PrismaClient } from '@prisma/client'
import config from "./config";
import cors from "cors";
import routes from "./routes";
import mysqlDb from "./database/mysql-connection"

// Initialise Express
const app = express();

// Instantiate prisma client


// req body parser settings
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// cors setting
app.use(cors());

// routes
app.use("/v1", routes);

// error handling
app.use((req, res, next) => {
    const error = new Error("route not found");

    return res.status(404).json({
        message: error.message
    });
});

const start = async () => {
    try {
        // database connection
        await mysqlDb.connect()

    } catch (e) {
        console.log(e.message);
    }

    // server
    const httpServer = http.createServer(app);
    httpServer.listen(config.server.port, () =>
        console.log(
            `Server running on 
        ${config.server.hostname}:${config.server.port}`
        )
    );
};

start()
    .catch((e) => {
        throw e
    });
