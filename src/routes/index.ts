import express from "express";
import userRoutes from "./users";
import {validateUserApiKey} from "../validators/userApiKeyValidator";
import {authenticateUserApiKey} from "../middlewares/authenticate";
const router = express();

// users routes
router.use("/users", validateUserApiKey, authenticateUserApiKey, userRoutes());

export default router;
