const router = require("express").Router();

// Add middleware with cookies to get the user - TODO
router.get("/getEnabledDates", (req, res) => {
    return res.json([
        new Date("03-05-2021"),
        new Date("03-06-2021"),
        new Date(),
        new Date("03-12-2020"),
    ]);
});

module.exports = router;
