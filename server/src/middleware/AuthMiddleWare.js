const jwt = require("jsonwebtoken");

module.exports = function AuthMiddleWare(req, res, next) {
    const token = req.cookies["token"];
    if (!token) {
        return res.redirect("/login");
    }
    jwt.verify(token, process.env.SECRET, (err) => {
        if (err) return res.clearCookie("token").redirect("/login");
        else next();
    });
};
