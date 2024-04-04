import logger from "../logger/logger";
import { DBHandler } from "../utils/dbHandler";

export interface UserDetail {
  id: string;
  firstName: string;
  email: string;
  role_id: Number;
  password: string;
  activate_link: string;
}
export class UserModel {
  static User: UserDetail;
  static async getUserByEmail(email: string): Promise<UserDetail> {
    this.User = await DBHandler.findOne(email);
    return this.User;
  }
  static async createUser(userInfo: UserDetail): Promise<string> {
    this.User = await DBHandler.insert(userInfo);
    return this.User.id;
  }
}
