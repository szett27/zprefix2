import { useState } from "react"
import {Button, Card, CardContent, Typography, Stack, Switch, FormControlLabel} from '@mui/material'
import React from 'react';



export default function Item(props){
    const [item_name, setItem_Name] = useState(props.item.item_name)
    const [description, setDescription] = useState(props.item.description)
    const [quantity, setQuantity] = useState(props.item.quantity)
    const [item_id, setItem_id] = useState(props.item.id)
    const [edit, setEdit] = useState("true")

    console.log(props.item)
    //delete item
    function deleteItem(e){
        let id = item_id;
        e.preventDefault();
        fetch(`http://localhost:5000/${id}`, 
        { method: 'DELETE' })
        .then(() => window.alert(`${item_name} deleted`));
    }
   
    function EditChange(){
        setEdit(!edit)
    }
   // console.log(props.item.user_id === props.user && props.auth)// ? setEdit('true') : setEdit('false');
    
      return (
        <div contentEditable = {edit}>
        <Card >
          <CardContent>
          {props.auth ? <FormControlLabel
      control={<Switch onChange = {()=>EditChange()} name="checked" />}
      label="Edit"
    /> : <></>}
          {/* <Switch label = "edit"></Switch> */}
          <Typography value = "itemName" variant="h5" onChange ={(e)=>setItem_Name(e.target.value)} component="h2">
              {item_name}
            </Typography>
            <Typography value = "quantity" variant="h5" component="h2">
              Quantity: {quantity}
            </Typography>
            <Typography value = "description" variant="body2" component="p">
              Description: {description}
            </Typography>
            <Button onClick = {(e)=>deleteItem(e)}>Delete Item</Button>
          </CardContent>
        </Card>
        </div>
      );
    }
    

    




    // return(
    //    <div>
    //     <Card>
    //     <CardContent>
    //     {props.auth && props.user === props.item.user_id ?<Stack direction="row" spacing={1} alignItems="center"> <Typography></Typography><Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
    //     <Typography>Edit</Typography></Stack> : <></>}
    //   <Typography sx={{ fontSize: 14 }} editable = {edit} color="text.secondary" gutterBottom>
    //     {item_name}
    //   </Typography>
    //   <Typography sx={{ fontSize: 14 }} editable = {edit} color="text.secondary" gutterBottom>
    //     {quantity}
    //   </Typography>
    //   <Typography sx={{ fontSize: 14 }} editable = {edit}  color="text.secondary" gutterBottom>
    //     {description}
    //   </Typography>
    //   {props.auth && props.user === props.item.user_id ? <Button >Delete</Button>: <></>}
    //     </CardContent>
    //     </Card>
    //    </div>

    // )
