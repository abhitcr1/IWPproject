const AuthMiddleWare = require("../middleware/AuthMiddleWare");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const User = require("../models/User");
router.get("/", AuthMiddleWare, (req, res) => {
    jwt.verify(
        req.cookies["token"],
        process.env.SECRET,
        async (err, decode) => {
            if (err)
                return res.render("index.html", {
                    page: "home",
                    name: "Bruce Wayne",
                });
            else {
                const user = await User.findById(decode._id);
                return res.render("index.html", {
                    page: "home",
                    name: user["name"],
                });
            }
        }
    );
});
module.exports = router;
