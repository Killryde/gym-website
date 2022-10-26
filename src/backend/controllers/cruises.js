import express from "express";
import { getAllCruises } from "../models/cruises.js";

const cruiseController = express.Router();

cruiseController.get("/all", (req, res) => {
    getAllCruises()
        .then(([cruises]) => {
            res.status(200).json({
                status: 200,
                cruises: cruises,
            });
        })
        .catch((error) => {
            res.status(500).json({
                status: 500,
                message: "Failed to get cruise list from database",
            });
        });
});

export default cruiseController;
