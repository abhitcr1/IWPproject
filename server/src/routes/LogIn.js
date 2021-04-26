const router = require("express").Router();
import React from "react";
import { renderToString } from "react-dom/server";
import LoginPage from "../components/pages/LoginPage";
const PreventReAuth = require("../middleware/PreventReAuth");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.get("/", PreventReAuth, async (req, res) => {
    const redirect = req.query["redirect"];
    const id = req.query["id"];
    if (redirect && id) {
        const user = await User.findById(id);
        if (user) {
            return res.render("react-template.html", {
                reactApp: renderToString(<LoginPage />),
                email: user.email,
                emailFound: true,
                password: false,
                redirect: true,
                page: "loginPage",
            });
        }
    }
    return res.render("react-template.html", {
        reactApp: renderToString(<LoginPage />),
        email: "",
        emailFound: true,
        password: false,
        redirect: false,
        page: "loginPage",
    });
});

router.post("/", PreventReAuth, async (req, res) => {
    const { email, password, save } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.render("react-template.html", {
            reactApp: renderToString(<LoginPage />),
            email: email,
            emailFound: false,
            password: false,
            redirect: false,
            page: "loginPage",
        });
    }
    if (!bcrypt.compareSync(password, user.password)) {
        return res.render("react-template.html", {
            reactApp: renderToString(<LoginPage />),
            email: email,
            emailFound: true,
            password: true,
            redirect: false,
            page: "loginPage",
        });
    }
    return res
        .cookie(
            "token",
            jwt.sign(
                { email: req.body["email"], _id: user._id },
                process.env.SECRET,
                { expiresIn: save === "on" ? "30d" : "30m" }
            ),
            { maxAge: save === "on" ? 30 * 86400000 : 30 * 60000 }
        )
        .redirect("/");
});

module.exports = router;
