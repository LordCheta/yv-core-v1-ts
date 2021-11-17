// import prisma from "./index";
import mysql from "../database/mysql-connection";

const db = mysql.connection;

// const getUserByApiKey = async (apiKey: string) => {
//     try {
//         return  await prisma.users.findFirst({
//             where: {
//                 api_key: apiKey
//             }
//         });
//
//     } catch (e) {
//         throw e;
//     }
// }

// const getUserProfile = async (id: number, params?: string[]) => {
//     try {
//         const user =  await prisma.users.findUnique({
//             where: {
//                 id: id,
//             }
//         });
//
//         let user_model: any
//         switch (user!.type) {
//             case "partner":
//                  user_model = await prisma.partners.findFirst({
//                     where: {
//                         user_id: id
//                     }
//                 });
//                  break;
//             case "business_partner":
//                  user_model = await prisma.business_partners.findFirst({
//                     where: {
//                         user_id: id
//                     }
//                 });
//                  break;
//             case "organizations":
//                 user_model = await prisma.organizations.findFirst({
//                     where: {
//                         user_id: id
//                     }
//                 });
//             }
//
//         // let packages: any = await prisma.mode
//     } catch (e) {
//         console.log(e);
//         throw e;
//     }
// }

const getUserByApiKey = async (apiKey: string) => {
    try {
        const sql = `SELECT * FROM users WHERE api_key = "${apiKey}"`;
        let [rows, fields]: any = await db.query(sql);

        if(rows.length === 0) throw Error("User With Requested Api Key Not Found");

        return rows[0];

    } catch (e) {
        console.log(e);
        throw e;
    }
}

const getUserById = async (userId: any) => {
    try {
            const getUserSql = `SELECT * FROM users WHERE id = "${userId}"`;

            let [rows, fields]: any = await db.query(getUserSql);

            if(rows.length === 0) throw Error("User With Requested Id Not Found");

            return rows[0];

    } catch (e) {
        throw e;
    }
}


export default {
    getUserByApiKey,
    getUserById
}
