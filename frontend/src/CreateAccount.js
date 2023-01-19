
import { useState} from "react";
import { TextField, Button } from "@mui/material";


function CreateAccount(props){
        const [userName, setUserName] = useState('');
        const [password, setPassword] = useState('');
        const [firstName, setfirstName] = useState('');
        const [lastName, setlastName] = useState('')

    function newUser(e){
        //create new user
        //call post route
        e.preventDefault()
        props.setCreateUser(false)
        props.setloginStatus(true)
    
    }
    //need to enfore types and validate data
    return(
        <div id = 'newUser'>
            <h1>Create a New Account</h1>
            <form onSubmit = {()=>newUser()}>
            <TextField id="outlined-basic" label="Enter Username" variant="outlined" value = {userName} onChange={(e)=>setUserName(e.target.value)} /><br></br>
            <TextField id="outlined-basic" label="Password" type = "password" variant="outlined" value = {password} onChange = {(e)=>setPassword(e.target.value)}/><br></br>
            <TextField id="outlined-basic" label="First Name" variant="outlined" value = {firstName} onChange={(e)=>setfirstName(e.target.value)}/><br></br>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" value = {lastName} onChange={(e)=>setlastName(e.target.value)}/><br></br>
            <Button type = "submit" onSubmit={(e)=>newUser(e)}>Create User</Button>
            </form>
        </div>

    )



}

export default CreateAccount