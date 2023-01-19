const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const Pool = require('pg').Pool;
const bcrypt = require('bcryptjs');
const port = process.env.PORT || 5000;



//using express to serve react build
app.use(express.static(path.join(__dirname, 'frontend', 'build')))


//connect server to database
const pool = new Pool({
    connectionString: "postgres://qigkvhbe:Hbs-D8NWd2TCHW_DImCiA3qhamn7v14l@queenie.db.elephantsql.com/qigkvhbe"
    })

app.use(express.json())

//basic home route
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html')
)});

//create a user  - successfull on localhost in postman
app.post("/register", async(req, res)=>{
    try{

        const firstName = req.body.firstname;
        const lastName = req.body.lastname;
        const USER_NAME = req.body.user_name;
        const hash =  await bcrypt.hash(req.body.password, 1);     

        console.log(hash)

        const newUser = await pool.query("INSERT INTO users (firstName, lastName, user_name, password) VALUES ($1, $2, $3, $4)", [firstName, lastName, USER_NAME, hash]);
    } catch(err){
        console.error(`Error ${err.message}`)
    }
})

//get inventory - tested in postman 
app.get("/inventory", async(req, res)=>{
    try{
        const allInventory =  await pool.query("SELECT * FROM inventory");
        res.json(allInventory.rows)
    } catch(err){
        console.error(err.message)
    }
})






//this only matters in a pre-prod environment
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
