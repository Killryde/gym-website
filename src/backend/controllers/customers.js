import express from "express";
import bcrypt from "bcryptjs";
import { createCustomer } from "../models/customers.js";
import { createLogin } from "../models/logins.js";

const CustomerController = express.Router();

CustomerController.post("/sign-up", async (req, res) => {
    // TODO: Validation

    const signUp = req.body;

    // Hash password
    const password_hash = await bcrypt.hash(signUp.password, 6);

    // Create login
    const [result] = await createLogin(signUp.username, password_hash);
    const login_id = result.insertId;

    createCustomer(
        login_id,
        signUp.first_name,
        signUp.last_name,
        signUp.phone,
        signUp.email,
        signUp.payment_method,
        signUp.country,
        signUp.state,
        signUp.city,
        signUp.street,
        signUp.postcode
    )
        .then(() => {
            res.status(200).json({
                status: 200,
                message: "Sign up successful",
            });
        })
        .catch((error) => {
            res.status(500).json({
                status: 500,
                message: "failed to sign up: " + error,
            });
        });
});

export default CustomerController;
