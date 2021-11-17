import { Request, Response, NextFunction } from "express";
import User from "../services/user";
import { successResponse } from "./index";
import userTransformer from "../transformers/user";


const check = async (req: Request, res: Response, next: NextFunction) => {

    return res.status(200).json({
        message: "API Active"
    });
};

const getUserByApiKey = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const user = await User.getUserByApiKey(req.user.api_key);

        successResponse(res, userTransformer(user));
    } catch (e) {
        console.log(e);
        return res.status(400).json({e})
    }

};

const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {

    try {
        // const userProfile = await User.getUserProfile(req.body.id)

        // successResponse(res, userProfile);
    } catch (e) {
        console.log(e);
        return res.status(400).json({e})
    }
}


export default {
    check,
    getUserByApiKey,
    getUserProfile
};
