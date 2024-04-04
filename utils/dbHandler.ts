import { QueryResult, ResultSetHeader, RowDataPacket } from "mysql2";
import connection from "../config/db";
import { UserDetail } from "../models/user";
import { parse } from "path";
export class DBHandler {
  static async findOne(email: string): Promise<any> {
    try {
      let query =
        "select firstName as username,id as userId,password from users where email=?";
      let [results] = await (
        await connection()
      ).query<RowDataPacket[]>(query, [email]);
      let User = results[0];
      return User;
    } catch (error) {
      return { error };
    }
  }
  static async insert(UserInfo: UserDetail): Promise<any> {
    try {
      let filed = Object.keys(UserInfo).join(",");
      let query = `insert into users ( id,firstName,email,password,role_id,activate_link) values (
        '${UserInfo.id}',
        '${UserInfo.firstName}',
        '${UserInfo.email}',
        '${UserInfo.password}',
        '${UserInfo.role_id}',
        '${UserInfo.activate_link}'
        )`;
      let results = await (await connection()).query<ResultSetHeader>(query);
      return results[0].affectedRows;
    } catch (error) {
      return { error };
    }
  }
}
