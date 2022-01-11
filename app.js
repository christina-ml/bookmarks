// Dependencies
const express = require("express");

// Configuration
const app = express();

// Middleware (new way of writing body-parser)
app.use(express.json());

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