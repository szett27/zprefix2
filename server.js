const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
