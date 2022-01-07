const express = require("express");
const bookmarkRoutes = express.Router();
const bookmarksArr = require("../models/bookmark.js");

bookmarkRoutes.get("/", (req, res)=>{
    res.json(bookmarksArr);
})

module.exports = bookmarkRoutes;
