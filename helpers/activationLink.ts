import { Request } from "express";
import { config } from "dotenv";
import otpGenerator from "otp-generator";
config();

export const activationLink = (req: Request, userId: string): string => {
  console.log(userId);
  return userId + "code=" + otpGenerator.generate(16);
};
