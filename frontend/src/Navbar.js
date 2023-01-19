import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';



export default function Navbar(props) {
    console.log(props)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
       {!props.loginStatus ?<><Button color = "info" type = "submit" onClick={()=>props.setLoginStatus(true)}>Login</Button></> :
        props.auth ? <><Typography>Hello User Name Goes Here</Typography><Button>Logout</Button></> : <></>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

