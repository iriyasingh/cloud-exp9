const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log("Home page accessed");
    res.send("Cloud Monitoring Demo");
});

app.get("/test", (req, res) => {
    console.log("Test endpoint accessed");
    res.send("Test successful");
});

app.get("/error", (req, res) => {
    console.error("Test error generated");
    res.status(500).send("Internal Server Error");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});