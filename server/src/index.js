const express = require("express");

const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.set("views", "views");
app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));

app.use("/", require("./routes/loginPage"));
app.use("/api", require("./routes/api/getEnabledDates"));
app.use("/api", require("./routes/api/getEntry"));
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
