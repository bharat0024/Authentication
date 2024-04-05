import express, { Router, Request, Response } from "express";
import { authRoute } from "./auth";

export const routes: Router = express.Router();

routes.use("/user", authRoute);
routes.get("/", (req: Request, res: Response): void => {
  res.redirect("/user");
});
routes.get("*", (req: Request, res: Response): void => {
  res.send("404 Page Not found");
});
