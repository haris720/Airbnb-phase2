const express = require("express")
const data = require("./data")
const app = express()
const cors = require('cors');

const port = 5000 || process.env.PORT

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.send("Api Working Properly")
})

app.get("/api/listing", (req, res) => {
    res.json({ data })
})


app.listen(port, () => {
    console.log(`Server is listening on ${port}`);

})