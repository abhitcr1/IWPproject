const router = require("express").Router();
const jwt = require("jsonwebtoken");
const AuthMiddleWare = require("../middleware/AuthMiddleWare");
const User = require("../models/User");

router.get("/", AuthMiddleWare, (req, res) => {
    jwt.verify(
        req.cookies["token"],
        process.env.SECRET,
        async (err, decode) => {
            if (err)
                return res.render("index.html", {
                    page: "edit",
                    name: "Bruce Wayne",
                });
            else {
                const user = await User.findById(decode._id);
                return res.render("index.html", {
                    page: "edit",
                    name: user["name"],
                });
            }
        }
    );
});

module.exports = router;
