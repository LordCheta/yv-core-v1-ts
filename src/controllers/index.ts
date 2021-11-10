import { NextFunction, Request, Response } from "express";


export const successResponse = (res: Response, data: any) => {
    return res.status(200).json({
        message:"Operation Successful",
        data: {
            data,
        }
    });
}
