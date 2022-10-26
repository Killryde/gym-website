import { db_conn } from "../database.js";

export function getAllClasses() {
  return db_conn.query("SELECT * FROM classes");
}
