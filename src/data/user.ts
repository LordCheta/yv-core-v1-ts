// import prisma from "./index";
import mysql from "../database/mysql-connection";

const db = mysql.connection;

const getUser = async (key: string, value: any) => {
    try {
        const user = await db('users').where(key, value).first();

        if (!user) throw Error("User Not Found");

        return user;
    } catch (e) {
        throw e;
    }
}


export default {
    getUser
}
