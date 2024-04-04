import { body } from "express-validator";

export const registerValidator = [
  body("email").isEmail().withMessage("Invalid email...!!").normalizeEmail(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 character long...!!"),
];

export const loginValidator = [
  body("email").isEmail().withMessage("Invalid email...!!").normalizeEmail(),
  body("password").isLength({ min: 8 }).withMessage("Invalid password...!!"),
];
