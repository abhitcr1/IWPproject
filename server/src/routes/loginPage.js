const router = require("express").Router();
import React from "react";
import { renderToString } from "react-dom/server";
import LoginPage from "../components/pages/LoginPage";

// Add cookie middleware and expect mongoid in params
router.get("/", (req, res) => {
    res.render("react-template.html", {
        reactApp: renderToString(
            <LoginPage emailErrorServer={false} passwordErrorServer={false} />
        ),
        email: "",
    });
});

router.post("/", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.redirect("/");
    if (email != "anurag@anurag.com")
        return res.render("react-template.html", {
            reactApp: renderToString(
                <LoginPage
                    emailErrorServer={true}
                    passwordErrorServer={false}
                />
            ),
            email: email,
        });
    if (password != "123456")
        return res.render("react-template.html", {
            reactApp: renderToString(
                <LoginPage
                    emailErrorServer={false}
                    passwordErrorServer={true}
                />
            ),
            email: email,
        });
    return res.send("Logged IN");
});
module.exports = router;
