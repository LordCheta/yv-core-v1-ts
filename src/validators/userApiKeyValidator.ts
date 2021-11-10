import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const validationSchema = Joi.object().keys({
    token: Joi.string().token().required(),
}).options({
    abortEarly: false,
    allowUnknown: true
});

export const validateUserApiKey = async (req: Request, res: Response, next: NextFunction) => {
    try
    {

        await validationSchema.validateAsync(req.headers);

        next();
    }
    catch (e) {
        let errors = e.details.map( (x: { path: any[]; message: any; })  => {
            return {
                property: x.path.join('.'),
                message: x.message,
            };
        });
        return res.status(400).json({
            message: "Please supply required property or properties",
            errors
        })

    }
};

