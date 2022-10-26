import express from "express";
import { getAllClasses } from "../models/class.js";

const cruiseController = express.Router();

cruiseController.get("/all", (req, res) => {
    getAllCruises()
        .then(([classes]) => {
            res.status(200).json({
                status: 200,
                classes: classes,
            });
        })
        .catch((error) => {
            res.status(500).json({
                status: 500,
                message: "Failed to get class list from database",
            });
        });
});

export default classController;
