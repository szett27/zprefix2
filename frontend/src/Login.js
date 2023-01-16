
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login(props){
    console.log(props)
    return(
        <div id = 'login'>
            <h2>{props.login ? 'Logged In' : 'Not Logged In'}</h2>
            <form onSubmit={()=>window.alert('Submitted')}> 
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" /><br />
            <Button type = 'submit'>Submit</Button><Button>Create Account</Button>
            </form>
          
       
        </div>
    )

}

export default Login