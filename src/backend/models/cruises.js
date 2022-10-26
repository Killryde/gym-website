import { db_conn } from "../database.js";

export function getAllCruises() {
  return db_conn.query("SELECT * FROM cruises");
}
