
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login(){
    return(
        <div id = 'login'>
            <form onSubmit={()=>window.alert('Submitted')}> 
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br />
               <Button type = 'submit'>Submit</Button><Button>Create Account</Button>
            </form>
          
       
        </div>
    )

}

export default Login