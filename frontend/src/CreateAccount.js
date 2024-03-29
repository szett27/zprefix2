
import { useState} from "react";
import { TextField, Button } from "@mui/material";


export default function CreateAccount(props){
        const [userName, setUserName] = useState('');
        const [password, setPassword] = useState('');
        const [firstName, setfirstName] = useState('');
        const [lastName, setlastName] = useState('')

    function makeUser(e){
            e.preventDefault();
            const data = {"firstname": firstName, "lastname": lastName, "user_name": userName, "password": password}
            fetch('/register', 
            {method: 'POST', 
             headers: {
            'Content-Type': 'application/json',
          }, 
          body: JSON.stringify(data)})
        .then(res=>res.json())
        .then(window.alert(`Welcome ${firstName + lastName} to the Inventory Management System`))
        .then(props.setUser(userName))
        .then(props.setCreateAccount(false))
        .then(props.setAuth(true))
     
        }
    //need to enfore types and validate data
    return(
        <div id = 'newUser'>
            <h1>Create a New Account</h1>
            <form onSubmit = {(e)=>makeUser(e)}>
            <TextField id="outlined-basic" label="Enter Username" variant="outlined" value = {userName} onChange={(e)=>setUserName(e.target.value)} /><br></br>
            <TextField id="outlined-basic" label="Password" type = "password" variant="outlined" value = {password} onChange = {(e)=>setPassword(e.target.value)}/><br></br>
            <TextField id="outlined-basic" label="First Name" variant="outlined" value = {firstName} onChange={(e)=>setfirstName(e.target.value)}/><br></br>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" value = {lastName} onChange={(e)=>setlastName(e.target.value)}/><br></br>
            <Button type = "submit">Create User</Button><Button onClick ={()=>props.setCreateAccount(false)}>Back to Inventory</Button>
            </form>
        </div>

    )



}
