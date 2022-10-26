import express from "express";
import fs from "fs";
import ejs from "ejs";
import { getAllClasses } from "../models/classes.js";
import { getPortsByID } from "../models/ports.js";
import { getAllBookingsByClassID } from "../models/bookings.js";
import { getCustomerByID } from "../models/customers.js";

const exportController = express.Router();

exportController.get("/cruise-list", async (req, res) => {
    // Build list of cruise objects from relational data
    const [cruises] = await getAllCruises();
    for (const cruise of cruises) {
        // Query ports and inject into cruise object
        const [[to_port]] = await getClassesByID(cruise.to_port_id);
        const [[from_port]] = await getClassesByID(cruise.from_port_id);
        cruise["to_port"] = to_port;
        cruise["from_port"] = from_port;

        // Query bookings and inject to cruise object
        const [bookings] = await getAllBookingsByCruiseID(cruise.cruise_id);
        for (const booking of bookings) {
            const [[customer]] = await getCustomerByID(booking.customer_id);
            booking["customer"] = customer;
        }
        cruise["bookings"] = bookings;
    }

    // Generate XML document using template
    const xml = ejs.render(
        fs.readFileSync("./src/backend/xml/cruise-list.xml.ejs").toString(),
        {
            cruises: cruises,
        }
    );

    // Send XML as download
    res.status(200)
        .header(
            "Content-Disposition",
            'attachment; filename="cruise-list-export.xml"'
        )
        .header("Content-Type", "application/xml")
        .send(xml);
});

export default exportController;
