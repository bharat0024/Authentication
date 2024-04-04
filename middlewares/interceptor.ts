import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { config } from "dotenv";

config();

const SECRET_KEY = process.env.SECRET_KEY || "auth00qwerty@asdfg!~";

const Interceptor = (req: Request, res: Response, next: Function) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (token) {
    jwt.verify(token, SECRET_KEY, (error, user) => {
      if (!error) {
        req.user = user;
      }
    });
    next();
  }
};
export default Interceptor;
