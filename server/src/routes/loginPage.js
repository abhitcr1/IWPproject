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
    if (!email || !password) return res.redirect("/");
    if (email != "anurag@anurag.com")
        return res.render("react-template.html", {
            reactApp: renderToString(<LoginPage />),
            email: email,
            emailFound: false,
            page: "loginPage",
            password: false,
        });
    if (password != "123456")
        return res.render("react-template.html", {
            reactApp: renderToString(<LoginPage />),
            email: email,
            emailFound: true,
            page: "loginPage",
            password: true,
        });
    return res.send("Logged IN");
});
module.exports = router;
