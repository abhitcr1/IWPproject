const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/static", express.static("static"));
app.use("/api", require("./routes/api/getEnabledDates"));
app.use("/api", require("./routes/api/getEntry"));
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
