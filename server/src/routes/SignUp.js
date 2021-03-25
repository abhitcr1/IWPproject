const router = require("express").Router();
import React from "react";
import { renderToString } from "react-dom/server";
import SignUp from "../components/pages/SignUp";

router.get("/", (req, res) => {
    res.render("react-template.html", {
        reactApp: renderToString(<SignUp />),
        email: "",
        password: false,
        emailFound: true,
        page: "signupPage",
    });
});

module.exports = router;
