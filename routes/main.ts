import express, { Router, Request, Response } from "express";
import { authRoute } from "./auth";

export const routes: Router = express.Router();

routes.use("/user", authRoute);
routes.use(express.static("public"));
routes.get("/", (req: Request, res: Response): void => {
  res.redirect("/user");
});
// routes.get("*", (req: Request, res: Response): void => {
//   res.redirect("/auth");
// });
