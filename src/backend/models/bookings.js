import { db_conn } from "../database.js";

export function getAllBookings() {
  return db_conn.query("SELECT * FROM bookings");
}

export function getAllBookingsByCruiseID(cruise_id) {
  return db_conn.query("SELECT * FROM bookings WHERE cruise_id = ?", [
    cruise_id,
  ]);
}
