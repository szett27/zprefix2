
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateAccount from './CreateAccount';
import { useState } from 'react';


function Login(props){
    console.log(props)
   const [createAccount, setCreateAccount] = useState(false)
   
   if(createAccount){
    return (<CreateAccount accountState = {setCreateAccount} login = {props.setLogin}/>) 
   } 

    return(
        <div id = 'login'>
            <h2>{props.login ? 'Logged In' : 'Not Logged In'}</h2>
            <form onSubmit={()=>window.alert('Submitted')}> 
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" /><br />
            <Button type = 'submit' onSubmit={()=>props.setLogin(true)}>Submit</Button><Button onClick={()=>setCreateAccount(true)}>Create Account</Button>
            </form>
          
       
        </div>
    )

}

export default Login