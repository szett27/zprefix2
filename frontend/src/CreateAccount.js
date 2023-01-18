
import { useState} from "react";
import { TextField, Button } from "@mui/material";


function CreateAccount(props){
        const [userName, setUserName] = useState('');
        const [password, setPassword] = useState('');
        const [email, setEmail] = useState('');
        const [userType, setUserType] = useState('')
    function newUser(e){
        //create new user
        //call post route
        e.preventDefault()
        props.setCreateAccount(false)
        props.setlogin(true)
    
    }
    //need to enfore types and validate data
    return(
        <div id = 'newUser'>
            <h1>Hello {userName}</h1>
            <form onSubmit = {()=>newUser()}>
            <TextField id="outlined-basic" label="Enter Username" variant="outlined" value = {userName} onChange={(e)=>setUserName(e.target.value)} /><br></br>
            <TextField id="outlined-basic" label="Password" type = "password" variant="outlined" value = {password} onChange = {(e)=>setPassword(e.target.value)}/><br></br>
            <TextField id="outlined-basic" label="email" variant="outlined" value = {email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <TextField id="outlined-basic" label="UserType" variant="outlined" value = {userType} onChange={(e)=>setUserType(e.target.value)}/><br></br>
            <Button type = "submit" onSubmit={(e)=>newUser(e)}>Create User</Button>
            </form>
        </div>

    )



}

export default CreateAccount