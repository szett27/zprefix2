
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Typography, Grid } from '@mui/material';


function Login(props){
   const [username, setUserName] = useState('')
   const [password, setPassword] = useState('')

   const authenticate = async (e)=>{
    e.preventDefault();
    const data = {"username": username, "password": password}
    
    const response =await fetch('/login', 
        {method: 'POST', 
         headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(data)})
    const authData = await response.json()
   let id  = [authData.id]
    if(authData.valid){
        props.setLoginStatus(false)
        props.setAuth(true)
        props.setUser(id[0])
        props.setMyInventory(true)
        window.alert('Login Success!')
    }
    else{
        window.alert('Invalid Username or Password')
    }
   }

    function displayCreate(e){
        e.preventDefault()
        props.setLoginStatus(false);
        props.setCreateAccount(true)
    }

    return(
        <div id = 'login'>
            <Grid
             container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
         style={{ minHeight: '100vh' }}>
            <Grid item xs={3}>
            <form className='form'> 
            <Typography variant='h5' align = "center">Login</Typography>
            <TextField id="outlined-basic" label="Username" variant="outlined" onChange ={(e)=>setUserName(e.target.value)} />
            <TextField id="outlined-basic" label="Password" type = "password" variant="outlined" onChange = {(e)=>setPassword(e.target.value)} /><br />
            <div align = "center"><Button type = 'submit' onClick={(e)=>authenticate(e)}>Submit</Button><Button onClick={(e)=>displayCreate(e)}>Create Account</Button>
            <Button onClick={()=>props.setCreateAccount(false)}>Back to Full Inventory</Button>
            </div>
            </form>
            </Grid>
            </Grid>
          
       
        </div>
    )

}

export default Login