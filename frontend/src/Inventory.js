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
}, [])

console.log(InventoryLoaded)


if(InventoryLoaded){
    return(
  <div>
  <Typography variant = "h4">Inventory</Typography>
    {/* {item ? <Item item = {item} setItem = {setItem} auth ={props.auth} user ={props.user}/> :
     props.myInventory ? inventory.filter(item=>(item.id===props.user)).map((item, key)=>{
        return(
            <Item id={key} item = {item} setItem = {setItem} auth ={props.auth} user ={props.userID}/>
        )
     }) :  */}
     {inventory[0].map((item, key)=>{ return(<Item id={key} item = {item} setItem = {setItem} auth ={props.auth} user ={props.userID}/>)})}
  </div>
) } 


else{

return (
    <div>
        <h1>Inventory Loading...</h1>
    </div>
)
}

}
