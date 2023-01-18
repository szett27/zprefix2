const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'frontend', 'build')))

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html')
)});

//create a user 
app.post("/register", async(req, res)=>{
    try{

        const firstName = req.body.firstname;
        const lastName = req.body.lastname;
        const USER_NAME = req.body.user_name;
        const hash =  await bcrypt.hash(req.body.password, 1);     

        console.log(hash)

        const newUser = await pool.query("INSERT INTO users (firstName, lastName, user_name, password) VALUES ($1, $2, $3, $4)", [firstName, lastName, USER_NAME, hash]);
        res.json(newUser.rows)
    } catch(err){
        console.error(err.message)
    }
})






//this only matters in a pre-prod environment
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
