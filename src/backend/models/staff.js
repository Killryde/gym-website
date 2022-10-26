import { db_conn } from "../database.js";

export function getAllStaff() {
    return db_conn.query("SELECT * FROM staff");
}

export function getStaffByID(staff_id) {
    return db_conn.query("SELECT * FROM staff WHERE staff_id = ?", [staff_id]);
}

export function getStaffByLoginID(login_id) {
    return db_conn.query("SELECT * FROM staff WHERE login_id = ?", [login_id]);
}
