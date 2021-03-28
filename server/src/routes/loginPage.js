const router = require("express").Router();
import React from "react";
import { renderToString } from "react-dom/server";
import LoginPage from "../components/pages/LoginPage";

// Add cookie middleware and expect mongoid in params
router.get("/", (req, res) => {
    res.render("react-template.html", {
        reactApp: renderToString(<LoginPage />),
        email: "",
        emailFound: true,
        password: false,
        page: "loginPage",
    });
});

router.post("/", (req, res) => {
    const { email, password } = req.body;
    return res.redirect("/");
});
module.exports = router;
