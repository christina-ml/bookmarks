const express = require("express");
const bookmarkRoutes = express.Router();
const bookmarksArr = require("../models/bookmark.js");

bookmarkRoutes.use((req, res, next)=>{
    console.log("Trigger - From bookmarks");
    next();
})

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

// const { validateURL } = require("../models/validations.js");

//   /bookmarks
bookmarkRoutes.post("/", (req, res)=>{
    // console.log(req.body);
    bookmarksArr.push(req.body);
    res.json(bookmarksArr[bookmarksArr.length-1]);
})

/* How to remove at an index:
let letterArr = ["a", "b", "c", "d"];
letterArr.splice(2, 1);
---> How do we use this with our route?
*/

bookmarkRoutes.delete("/:index", (req, res)=>{
    const { index } = req.params;
})

module.exports = bookmarkRoutes;
