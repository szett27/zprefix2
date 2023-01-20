
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateAccount from './CreateAccount';
import { useState } from 'react';
import { Typography, Grid } from '@mui/material';

//if createUser is False, 

//function authenticate(e){
  //  e.preventDefault();
    // const data = {"username": username, "password": password}
 
    // fetch('/login', 
    //     {method: 'POST', 
    //      headers: {
    //     'Content-Type': 'application/json',
    //   }, 
    //   body: JSON.stringify(data)})
    // .then(res=>res.json())
    // .then(bool=>{
    //     props.setLogin(true)

        //set userID props.userID()
    // })
//}

//function createAccount(e){
    //e.preventDefault();
//     const data = {"firstname": firstname, "lastname": lastname, "user_name": username, "password": password}
//     fetch('http://localhost:5000/register', 
//     {method: 'POST', 
//      headers: {
//     'Content-Type': 'application/json',
//   }, 
//   body: JSON.stringify(data)})
// .then(res=>res.json())
// .then(props.setLogin(true), setCreateUser(false))
// .then(window.alert(`Welcome ${firstname + lastname} to the Inventory Management System`))
// .then(props.setLogin(true)
// )}
//}
//login
//if logged in show Hello + user.firstname, maybe total number of inventory?
//put login as the submit button
//
function Login(props){
   const [createAccount, setCreateAccount] = useState(false)
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
   
    if(authData){
        props.setLoginStatus(false)
        props.setAuth(true)
        props.setUser(username)
        window.alert('Login Success!')
    }
    else{
        window.alert('Invalid Username or Password')
    }
   }

   if(createAccount){
    return (<CreateAccount accountState = {setCreateAccount} login = {props.setLoginStatus}/>) 
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
            <TextField id="outlined-basic" label="Username" variant="outlined" onChange ={(e)=>setUserName(e.target.value)} />
            <TextField id="outlined-basic" label="Password" type = "password" variant="outlined" onChange = {(e)=>setPassword(e.target.value)} /><br />
            <Button type = 'submit' onClick={(e)=>authenticate(e)}>Submit</Button><Button onClick={()=>setCreateAccount(true)}>Create Account</Button>
            </form>
            </Grid>
            </Grid>
          
       
        </div>
    )

}

export default Login