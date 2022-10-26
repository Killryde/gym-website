import { db_conn } from "../database.js";

export function getAllCustomers() {
    return db_conn.query("SELECT * FROM customers");
}

export function getCustomerByID(customer_id) {
    return db_conn.query("SELECT * FROM customers WHERE customer_id = ?", [
        customer_id,
    ]);
}

export function getCustomerByLoginID(login_id) {
    return db_conn.query("SELECT * FROM customers WHERE login_id = ?", [
        login_id,
    ]);
}

export function createCustomer(
    login_id,
    first_name,
    last_name,
    phone,
    email,
    payment_method,
    country,
    state,
    city,
    street,
    postcode
) {
    return db_conn.query(
        `
    INSERT INTO customers
    (
        login_id, first_name, last_name, phone, email, payment_method, 
        country, state, city, street, postcode
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
        [
            login_id,
            first_name,
            last_name,
            phone,
            email,
            payment_method,
            country,
            state,
            city,
            street,
            postcode,
        ]
    );
}
