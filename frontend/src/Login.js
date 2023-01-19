
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateAccount from './CreateAccount';
import { useState } from 'react';

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