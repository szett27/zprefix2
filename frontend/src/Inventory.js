import {useState, useEffect} from 'react';
import { Button, ListItemSecondaryAction, Typography } from '@mui/material';
import Item from './item'

export default function Inventory(props){

const [inventory, setInventory] =useState([]);
const [singleItem, setSingleItem] = useState([]);
const [newItem, setNewItem] = useState(false);
const [InventoryLoaded, setInventoryLoaded] = useState(false);

useEffect(()=>{
  fetch('http://localhost:5000/inventory')
  .then((response) => response.json())
  .then((data) => setInventory([...inventory, data]))
  .then(()=>setInventoryLoaded(true));
}, [inventory])



if(InventoryLoaded && (singleItem.length > 0)){
  return(
    <div>
      <Item item = {singleItem} setSingleItem = {setSingleItem} auth ={props.auth} user ={props.user}/>
      <Button onClick = {()=>setSingleItem([...singleItem, []])}>Full Inventory</Button>
    </div>  
  )
}
 else if(InventoryLoaded){
return( 
  <div>
 <Button onClick = {()=>props.setMyInventory(false)}><Typography variant = "h4">Full Inventory</Typography></Button>
 {props.myInventory ? <Typography>User {props.user} 's Inventory</Typography>:<></>}
 {props.myInventory ? inventory[0].filter(item=>item.user_id === props.user).map((item, key)=>{
        return (<Item setSingleItem = {setSingleItem} id={key} item = {item} auth ={props.auth} user ={props.user}/>)
    }) : 
    inventory[0].map((item, key)=>{
      return(<Item id={key} setSingleItem = {setSingleItem} item = {item}  auth ={props.auth} user ={props.user}/>)

    })
      }
     </div>)
}
else{

return (
    <div>
        <h1>Inventory Loading...</h1>
    </div>
)
}

}
