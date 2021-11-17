import User from "../services/user";
import {NextFunction, Request, Response} from "express";


export const authenticateUserApiKey = async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.user = await User.getUserByApiKey(req.headers.token as string);

        next();
    } catch (e) {
        throw e;
    }
}
