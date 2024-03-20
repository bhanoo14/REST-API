const express = require("express");
const {Router} = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    res.send("UserList");
});

router.get("/new", (req, res) => {
    res.render("users/new", {firstName: "Bhanoo"});
});

router.post("/", (req, res) => {
    res.send("User Created");
});

router.get("/:id", (req, res) => {
    res.send(`Get the new User with ID ${req.params.id}`);
});


module.exports = router;