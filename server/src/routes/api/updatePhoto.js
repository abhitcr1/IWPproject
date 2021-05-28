const router = require("express").Router();
const User = require("../../models/User");
const AuthMiddleWare = require("../../middleware/AuthMiddleWare");
const jwt = require("jsonwebtoken");

router.post("/updatePhoto", AuthMiddleWare, (req, res) => {
    jwt.verify(
        req.cookies["token"],
        process.env.SECRET,
        async (err, decode) => {
            if (err) return res.status(400).send();
            const user = await User.findById(decode._id);
            user.picture = req.body.picture;
            user.save((err) => {
                if (err) return res.status(400).json({ ok: false });
                return res.status(200).json({ ok: true });
            });
        }
    );
});

module.exports = router;
