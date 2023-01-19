const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const Pool = require('pg').Pool;
const bcrypt = require('bcryptjs');
const { rejects } = require("assert");
const port = process.env.PORT || 5001;



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
            res.json(validPassword)
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
        
        const item_name = req.body.item_name;
        const description = req.body.description;
        const quantity = req.body.quantity;
        const user_id = req.body.user_id;
        
       

        const newUser = await pool.query("INSERT INTO inventory (item_name, description, quantity, user_id) VALUES ($1, $2, $3, $4)", [item_name, description, quantity, user_id]);
        console.log(req.body)
    } catch(err){
        console.error(err.message)
    }
})

//update an item's properties
app.patch("/item", async(req, res)=>{
    try{
        const item_name = req.body.item_name;
        const description = req.body.description;
        const quantity = req.body.quantity;
        const item_id = req.body.item_id;
            //look at body and see what's updated and not update
        console.log(description)
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
