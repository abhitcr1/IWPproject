const AuthMiddleWare = require("../middleware/AuthMiddleWare");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const User = require("../models/User");
const Entry = require("../models/Entry");
router.get("/", AuthMiddleWare, (req, res) => {
    jwt.verify(
        req.cookies["token"],
        process.env.SECRET,
        async (err, decode) => {
            if (err) return res.status(400).send();
            else {
                const user = await User.findById(decode._id);
                const items = await Entry.aggregate([
                    {
                        $match: { uid: decode._id },
                    },
                    {
                        $project: {
                            _id: 1,
                            title: 1,
                            mood: 1,
                            entries: { $size: "$entries" },
                            createdAt: 1,
                            images: 1,
                        },
                    },
                    { $sort: { createdAt: -1 } },
                ]).limit(6);
                return res.render("index.html", {
                    page: "home",
                    name: user["name"],
                    docs: items,
                });
            }
        }
    );
});
module.exports = router;
