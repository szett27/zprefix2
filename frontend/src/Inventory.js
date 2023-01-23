import {useState, useEffect} from 'react';
import { Button, ListItemSecondaryAction, Typography } from '@mui/material';
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
  console.log(inventory[0])
  console.log(props.user, props.myInventory)
  console.log(inventory[0].map(item=>{
    console.log(item.user_id)
  }))
let x = inventory[0].filter(item=>item.user_id === props.user)
console.log(x.length)

return( 
  <div>
 <Button onClick = {()=>props.setMyInventory(false)}><Typography variant = "h4">Full Inventory</Typography></Button>
 {props.myInventory ? <Typography>User {props.user} 's Inventory</Typography>:<></>}
    {props.myInventory ? inventory[0].filter(item=>item.user_id === props.user).map((item, key)=>{
      {console.log('I am an item')}
        return (<Item id={key} item = {item} setItem = {setItem} auth ={props.auth} user ={props.user}/>)
    }) : 
    inventory[0].map((key, item)=>{
      return(<Item id={key} item = {item} setItem = {setItem} auth ={props.auth} user ={props.user}/>)

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
