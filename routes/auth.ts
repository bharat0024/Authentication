import express, { Request, Response, Router } from "express";
import {
  loginValidator,
  registerValidator,
} from "../validators/userValidation";
import userController from "../controllers/userController";

export const authRoute: Router = express.Router();

// authRoute.get("/register", registerValidator, userController.register);
// authRoute.get("/login", loginValidator, userController.login);
authRoute.post("/register", registerValidator, userController.register);
authRoute.post("/login", loginValidator, userController.login);
authRoute.get("/", (re: Request, res: Response): void => {
  res.send("login form");
});
