import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';





export default function Navbar(props) {
  function logout(e){
    e.preventDefault(e)
    props.setLoginStatus(true);
    props.auth(false);
  
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Inventory Management</Typography>
        {props.auth ?  <><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Hello {props.user}</Typography>
        <Button color ="inherit" onClick={()=>props.setMyInventory(true)}>My Inventory</Button><Button color = "inherit" onClick={()=>props.setCreateItem(true)}>Add Item</Button><Button color = "inherit" onClick={()=>props.setAuth(false)}>Logout</Button></>: <></>}
        {!props.auth ?<><Button color = "inherit" type = "submit" onClick={(e)=>logout(e)}>Login</Button></> :<></>}
        </Toolbar>
      </AppBar>
    </Box>

   
  );
}

