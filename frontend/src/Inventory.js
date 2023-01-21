import {useState} from 'react';
import { Button } from '@mui/material';
import {Card} from '@mui/material'
import Item from './item'

export default function Inventory(props){
//display all inventory, paginate?
//sample inventory
const [inventory, setInventory] =useState(0);
const [item, setItem] = useState(false);
const [newItem, setNewItem] = useState(false);
const [ InventoryLoaded, setInventoryLoaded] = useState('false')

function componentDidMount(){
  fetch('http://localhost:5000/inventory')
  .then((response) => response.json())
  .then((data) => setInventory(data))
  .then(console.log(inventory))
  .then(()=>setInventoryLoaded(true));
}


if(setInventory){
    return(

  <div>
  <Button onClick = {()=>setInventory(0)}>Inventory</Button>
    {item ? <Item item = {item} setItem = {setItem} auth ={props.auth} user ={props.user}/> :
     props.myInventory ? inventory.filter(item=>(item.id===props.user)).map((item, key)=>{
        return(
            <Item id={key} item = {item} setItem = {setItem} auth ={props.auth} user ={props.userID}/>
        )
     }) : inventory.map((item, key)=>{
    <Item id={key} item = {item} setItem = {setItem} auth ={props.auth} user ={props.userID}/>
  })}
  </div>
) } 
else{

return (
    <div>
        <p>Invenotry Loading...</p>
    </div>
)
}

}
