const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const Pool = require('pg').Pool;
const bcrypt = require('bcryptjs');
const { rejects } = require("assert");
const port = process.env.PORT || 5000;
const session = require('express-session')

const crypto = require('crypto')
let sessionHash = crypto.createHash('md5').update('some_string').digest("hex")

//using express to serve react build
app.use(express.static(path.join(__dirname, 'frontend', 'build')))
app.use(cors())

app.use(session({
    secret: sessionHash,
    resave: false,
    saveUninitialized: false
}))

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
        const newUser = await pool.query("INSERT INTO users (firstName, lastName, user_name, password) VALUES ($1, $2, $3, $4)", [firstName, lastName, USER_NAME, hash]);
    } catch(err){
        console.error(`Error ${err.message}`)
    }
})

//user login
app.post("/login", async(req, res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;
    
        const hash =  await pool.query("SELECT password FROM users WHERE user_name = $1", [username]);
        let hashed = hash.rows[0].password
        


        if(hashed){
            const validPassword = await bcrypt.compare(password, hashed)
            const id = await pool.query("SELECT user_id FROM users WHERE user_name = $1", [username]);
            res.json({"valid": validPassword, "id": id.rows[0].user_id})
            if(validPassword){
                req.session.isAuth = true;
            }
        }
    } catch(err){
        console.error(err.message)
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

app.post("/item", async(req, res)=>{
    try{
        
        const item_name = req.body.itemName;
        const description = req.body.itemDescription;
        const quantity = req.body.itemQuantity;
        const user_id = req.body.user_id;
        const newItem = await pool.query("INSERT INTO inventory (item_name, description, quantity, user_id) VALUES ($1, $2, $3, $4)", [item_name, description, quantity, user_id]);
        console.log(req.body)
    } catch(err){
        console.error(err.message)
    }
})

//update an item's properties
app.patch("/item", async(req, res)=>{
    try{
        console.log(req.body)
        const item_name = req.body.itemName;
        const description = req.body.itemDescription;
        const quantity = req.body.itemQuantity;
        const item_id = req.body.item_id;
        const updateItem = await pool.query("UPDATE inventory SET item_name = $2, description = $3,  quantity =$4 WHERE item_id = $1", [item_id, item_name, description, quantity])
        console.log(updateItem.rows)
    } catch(err){
        console.error(err.message)
    }
});


//delete an item based on it's id
app.delete("/delete/:id", async(req, res)=>{
    try{
        const id = req.params.id;
        const item =  await pool.query("DELETE FROM inventory WHERE item_id = $1", [id]);
        res.json(item.rows)
    } catch(err){
        console.error(err.message)
    }
})




//this only matters in a pre-prod environment
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
