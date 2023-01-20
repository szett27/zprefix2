import {useState} from 'react';
import { Button } from '@mui/material';

export default function Inventory(props){
//display all inventory, paginate?
//sample inventory
const [inventory, setInventory] =useState(0);
const [item, setItem] = useState(false);
const [newItem, setNewItem] = useState(false)

// function componentDidMount(){
//   fetch('/items')
//   .then((response) => response.json())
//   .then((data) => setInventory(data));
// }

return(
  <div>
  <Button onClick = {()=>setInventory(0)}>Inventory</Button>
    {/* {item ? <Item id={key} item = {item} setItem = {setItem} auth ={props.auth} user ={props.userID}/>
     : inventory.map((item, key)=>{
    <Item id={key} item = {item} setItem = {setItem} auth ={props.auth} user ={props.userID}/>
  })} */}
  </div>
)

}
