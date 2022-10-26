import express from "express";
import session from "express-session";

// Create an express app instance and define listing port for later
const app = express();
const port = 8080;

// Enable session middleware
app.use(
    session({
        secret: "secret phrase",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);

// Enable support for JSON and URL-encoded request bodies.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static resources
app.use(express.static("static"));

// Hook up controllers
import loginController from "./controllers/logins.js";
app.use("/logins", loginController);
import exportController from "./controllers/export.js";
app.use("/export", exportController);
import cruiseController from "./controllers/classes";
app.use("/classes", cruiseController);
import customerController from "./controllers/customers.js";
app.use("/customers", customerController);

// Start listening for requests
app.listen(port, () => {
    console.log(`Express server started on http://localhost:${port}`);
});
