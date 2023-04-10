const express = require ("express")
const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname +  "/index.html")
})
app.get("/*", (req, res) => {
    console.log(__dirname + "/" + req.url);
    res.sendFile(__dirname + "/" + req.url)
})






app.listen(8000)
