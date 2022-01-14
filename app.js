// Dependencies
const express = require("express");

// Configuration
const app = express();

// Inject cors middleware into our application (for connecting to frontend)
const cors = require("cors");
app.use(cors());

// Middleware (new way of writing body-parser)
app.use(express.json());

app.use((req, res, next)=>{
    console.log("Trigger 1 - Intercepted by our middleware");
    next();
})

// Controllers
const bookmarksController = require("./controllers/bookmarksController.js");
app.use("/bookmarks", bookmarksController);

// Routes
app.get("/", (req, res)=>{
    res.send("Welcome to Bookmarks App")
});

app.get("*", (req, res)=>{
    res.status(404).json({ error: "Page not found" });
});

// Export
module.exports = app;