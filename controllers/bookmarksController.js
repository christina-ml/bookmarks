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
        res.status(404).json({error: "Bookmark not found"});
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

// DELETE - remove 1 item
bookmarkRoutes.delete("/:index", (req, res)=>{
    const { index } = req.params;
    if (bookmarksArr[index]){
        let removed = bookmarksArr.splice(index, 1);
        res.json(removed[0]);
    } else {
        res.status(404).json({error: "Not found"});
    }
})

module.exports = bookmarkRoutes;
