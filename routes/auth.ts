import express, { Request, Response, Router } from "express";
import {
  forgotEmailValidator,
  forgotPasswordValidator,
  loginValidator,
  registerValidator,
} from "../validators/userValidation";
import userController from "../controllers/userController";
import path from "path";

export const authRoute: Router = express.Router();

authRoute.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.resolve("views/Authentication/auth.html"));
});
authRoute.post("/register", registerValidator, userController.register);
authRoute.post("/login", loginValidator, userController.login);
authRoute.put(
  "/forgot/password",
  forgotPasswordValidator,
  userController.forgotPassword
);
authRoute.put(
  "/forgot/email",
  forgotEmailValidator,
  userController.forgotEmail
);
authRoute.get("/", (re: Request, res: Response): void => {
  res.send("login form");
});
