const express = require("express");
let app = express();
app.set("view engine", "pug")

app.use(express.static(__dirname + "/assets"))

app.get("/", (req, res) => {
    res.render("slides")
})
app.listen(1234, () => {
    console.log("listening on 1234...");
})
