
import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import {Button, Box} from '@mui/material';


export default function CreateItem(props){
    const [itemName, setItemName] = useState('');
    const[itemQuantity, setItemQuantity] =useState(0)
    const[itemDescription, setItemDescription] = useState('')
    console.log(props.user)

    function addItem(e){
        e.preventDefault();
        const data = {"itemName": itemName, "itemQuantity": itemQuantity, "itemDescription": itemDescription, "user_id": props.user}
        e.preventDefault();
        fetch('http://localhost:5000/item', 
        {method: 'POST', 
         headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(data)})
    .then(res=>res.json())
    .then(window.alert(`${itemName} added to system`))
    .then(props.setCreateItem(false))
    }
    
    return(

            <div id = 'newItem'>
              <Box>
                <Typography variant = "h4">Add Item to Inventory</Typography>
                <form onSubmit = {(e)=>addItem(e)}>
                <TextField id="outlined-basic" label="Item Name" variant="outlined" value = {itemName} onChange={(e)=>setItemName(e.target.value)} /><br></br>
                <TextField id="outlined-basic" label="Item Quantity" variant="outlined" value = {itemQuantity} onChange = {(e)=>setItemQuantity(e.target.value)}/><br></br>
                <TextField id="outlined-basic" label="Item Description" variant="outlined" value = {itemDescription} onChange={(e)=>setItemDescription(e.target.value)}/><br></br>
                <Button type = "submit">Add Item</Button>
                </form>
                </Box>
            </div>
    
    )


    }

