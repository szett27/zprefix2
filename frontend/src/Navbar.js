import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';

import { createTheme, ThemeProvider } from "@mui/material/styles";



export default function Navbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Inventory Management</Typography>
        {props.auth ?  <><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Hello User Name Goes Here</Typography><Button color ="inherit">My Inventory</Button><Button color = "inherit" onClick={()=>props.setAuth(false)}>Logout</Button></>: <></>}
        {!props.auth ?<><Button color = "inherit" type = "submit" onClick={()=>props.setLoginStatus(true)}>Login</Button></> :<></>}
        </Toolbar>
      </AppBar>
    </Box>

   
  );
}

