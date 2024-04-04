import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { config } from "dotenv";
import { UserDetail } from "../models/user";

config();

const SECRET_KEY = process.env.SECRET_KEY || "auth00qwerty@asdfg!~";

const AuthenticateToken = (req: Request, res: Response, next: Function) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, SECRET_KEY, (error, user) => {
    if (error) {
      return res.status(403).json({ error: "Invalid token" });
    }
    req.user = user;
  });
  next();
};
export default AuthenticateToken;
