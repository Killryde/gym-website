import { db_conn } from "../database.js";

export function getLoginByID(login_id) {
  return db_conn.query("SELECT * FROM logins WHERE login_id = ?", [login_id]);
}

export function getLoginByUsername(username) {
  return db_conn.query("SELECT * FROM logins WHERE login_username = ?", [
    username,
  ]);
}

export function createLogin(username, password) {
  return db_conn.query(
    `INSERT INTO logins (login_username, login_password) VALUES (?, ?)`,
    [username, password]
  );
}

export function updateLoginByID(login_id, username, password) {
  return db_conn.query(
    `
      UPDATE logins
      SET login_username = ?, login_password = ?
      WHERE login_id = ?
    `,
    [username, password, login_id]
  );
}

export function deleteLoginByID(login_id) {
  return db_conn.query("DELETE FROM logins WHERE login_id = ?", [login_id]);
}
