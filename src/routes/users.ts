import { Router } from "express";
import userController from "../controllers/user";

const api = Router();

export default () => {
    api.get("", userController.getUserByApiKey);
    api.get("/check", userController.check);
    api.get("/profile", userController.getUserProfile);

    return api;
};
