import { useState, forceUpdate } from "react"
import {Button, Card, CardContent, Typography, Stack, Switch, FormControlLabel} from '@mui/material'
import React from 'react';



export default function Item(props){
    const [item_name, setItem_Name] = useState(props.item.item_name)
    const [description, setDescription] = useState(props.item.description)
    const [quantity, setQuantity] = useState(props.item.quantity)
    const [item_id, setItem_id] = useState(props.item.item_id)
    const [edit, setEdit] = useState("false")

    //delete item
    function deleteItem(e){
        let id = item_id;
        e.preventDefault();
        fetch(`http://localhost:5000/delete/${id}`, 
        { method: 'DELETE' })
        .then(() => window.alert(`${item_name} deleted`)
        .then(()=>forceUpdate()));
    }
   
    // function EditChange(e){
    //     e.preventDefault()
    //     setEdit(!edit)
    // }

    function UpdateItem(e){
            e.preventDefault();
            const data = {"itemName": item_name, "itemQuantity": quantity, "itemDescription": description, "item_id": item_id}
            fetch('http://localhost:5000/item', 
            {method: 'PATCH', 
             headers: {
            'Content-Type': 'application/json',
          }, 
          body: JSON.stringify(data)})
        .then(res=>res.json())
        .then(window.alert(`${item_name} updated!`))
        .then(()=>forceUpdate())
        }

        let authEdit = (props.auth && edit);

    console.log(authEdit, props.item.user_id)
      return (
        <div contentEditable = {edit}>
        <Card >
          <CardContent>
          {authEdit ? <FormControlLabel
      control={<Switch  onChange = {()=>setEdit(!edit)} name="checked" />}
      label="Edit"
    /> : <></>}
          {/* <Switch label = "edit"></Switch> */}
          
            {(authEdit) ? <form><input onChange ={(e)=>setItem_Name(e.target.value)} value = {item_name} /></form> :  <Typography value = "itemName" variant="h5"  component="h2">{item_name} </Typography>}
         
            <Typography value = "quantity" variant="h5" component="h2" onChange={(e)=>setQuantity(e.target.value)}>
            {(authEdit) ? <form><input onChange ={(e)=>setQuantity(e.target.value)} value = {quantity} /></form>: `Quantity: ${quantity}`}
            </Typography>
            <Typography value = "description" variant="body2" component="p" onChange={(e)=>setDescription(e.target.value)}>
            {(authEdit) ? <form><input onChange ={(e)=>setDescription(e.target.value)} value = {description} /></form>: description}
            </Typography>
           {(authEdit) ? <div><Button color = "inherit" onClick = {(e)=>deleteItem(e)}>Delete Item</Button> <Button color = "inherit" onClick = {(e)=>UpdateItem(e)}>Update Item</Button></div> : <></>}
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
