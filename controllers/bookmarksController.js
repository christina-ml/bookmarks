const express = require("express");
const bookmarkRoutes = express.Router();
const bookmarksArr = require("../models/bookmark.js");

//  This is: `/bookmarks`
bookmarkRoutes.get("/", (req, res)=>{
    res.json(bookmarksArr);
})
//   This is: `/bookmarks/3`
bookmarkRoutes.get("/:index", (req, res)=>{
    const { index } = req.params;
    if (bookmarksArr[index]){
        res.json(bookmarksArr[index]);
    } else {
        res.status(404).json({message: "Bookmark not found"});
    }
});

//   /bookmarks
bookmarkRoutes.post("/", (req, res)=>{
    // console.log(req.body);
    bookmarksArr.push(req.body);
    res.json(bookmarksArr[bookmarksArr.length-1]);
})

module.exports = bookmarkRoutes;
