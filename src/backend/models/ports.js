import { db_conn } from "../database.js";

export function getAllPorts() {
  return db_conn.query("SELECT * FROM ports");
}

export function getPortsByID(port_id) {
  return db_conn.query("SELECT * FROM ports WHERE port_id = ?", [port_id]);
}
