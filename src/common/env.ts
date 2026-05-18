import dotenv from "dotenv";
dotenv.config();
 
export const POSTGRES = {
  PASSWORD: process.env.PLSQL_PASSWORD,
  HOST: process.env.PLSQL_HOST,
  DATABASE:
    process.env.PLSQL_DATABASE,
  USERNAME: process.env.PLSQL_USERNAME,
};