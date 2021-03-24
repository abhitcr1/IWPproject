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
    });
});

router.post("/", (req, res) => {
    res.send(req.body);
});
module.exports = router;
