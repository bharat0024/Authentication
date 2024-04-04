import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import generateUniqueId from "generate-unique-id";
import { config } from "dotenv";
import { Result, validationResult } from "express-validator";
import { Request, Response } from "express";

import logger from "../logger/logger";
import { UserDetail, UserModel } from "../models/user";
import { activationLink } from "../helpers/activationLink";

config();

const SECRET_KEY = process.env.SECRET_KEY || "auth00qwerty@asdfg!~";

class userController {
  static async register(req: Request, res: Response) {
    const errors: Result = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, email, password } = req.body;
    try {
      const existingUser: UserDetail = await UserModel.getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ error: "User already exits..!!" });
      }
      const salt: string = await bcrypt.genSalt(10);
      const hashedPassword: string = await bcrypt.hash(password, salt);
      const userId: string = generateUniqueId();
      let result = await UserModel.createUser({
        id: userId,
        firstName,
        email,
        password: hashedPassword,
        role_id: 1,
        activate_link: activationLink(req, userId),
      });
      if (result)
        res
          .status(201)
          .json({ message: "User registered successfully", userId });
      else throw "";
    } catch (error) {
      logger.error(error, "Something wen't wrong...!!");
      res.status(500).json({ error: "Server error..!!" });
    }
  }
  static async login(req: Request, res: Response) {
    const errors: Result = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const User: UserDetail = await UserModel.getUserByEmail(email);
      if (!User) {
        return res.status(401).json({ error: "Invalid credentials..!!" });
      }
      const isPassword: Boolean = await bcrypt.compare(password, User.password);
      if (!isPassword) {
        return res.status(401).json({ error: "Invalid credentials..!!" });
      }

      const accessToken = jwt.sign({ userId: User.id }, SECRET_KEY, {
        expiresIn: "60m",
      });
      const refreshToken = jwt.sign({ userId: User.id }, SECRET_KEY, {
        expiresIn: "60m",
      });

      res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
      logger.error(error, "Something wen't wrong...!!");
      res.status(500).json({ error: "Server error..!!" });
    }
  }
  static async forgotPassword(req: Request, res: Response) {}
  static async forgotEmail(req: Request, res: Response) {}
}
export default userController;
