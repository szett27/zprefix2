import {useState, useEffect} from 'react';
import { Button, Typography } from '@mui/material';
import {Card} from '@mui/material'
import Item from './item'

export default function Inventory(props){

const [inventory, setInventory] =useState([]);
const [item, setItem] = useState(false);
const [newItem, setNewItem] = useState(false);
const [InventoryLoaded, setInventoryLoaded] = useState(false);

useEffect(()=>{
  fetch('http://localhost:5000/inventory')
  .then((response) => response.json())
  .then((data) => setInventory([...inventory, data]))
  .then(()=>setInventoryLoaded(true));
}, [inventory])

// inventory.map(item=>{
//     return(
//     console.log(item.user_id)
//     )
// })

if(InventoryLoaded){
    return(
  <div>
  <Button onClick = {()=>props.setMyInventory(false)}><Typography variant = "h4">Inventory</Typography></Button>
    {inventory[0].map((item, key)=>{return(props.myInventory && item.user_id === props.user ? <Item id={key} item = {item} setItem = {setItem} auth ={props.auth} user ={props.user}/>: <Item id={key} item = {item} setItem = {setItem} auth ={props.auth} user ={props.user}/>)})}
     </div>
    )}
else{

return (
    <div>
        <h1>Inventory Loading...</h1>
    </div>
)
}

}
