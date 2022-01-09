const express = require("express");
const path = require("path");


const app = express();

app.use("/static", express.static(path.resolve(__dirname,"frontend", "static")));

app.use("/img", express.static(path.resolve(__dirname,"frontend", "img")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});


const port = process.env.PORT || 3000
app.listen(port, () => 
    console.log(`server running on localhost: https://localhost:${port}....`));