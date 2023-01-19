import {useState} from 'react';

export default function Inventory(){
//display all inventory, paginate?
//sample inventory
const [inventory, setInventory] =useState('');
const [item, setItem] = useState(false);
const [newItem, setNewItem] = useState(false)

// function componentDidMount(){
//   fetch('/items')
//   .then((response) => response.json())
//   .then((data) => setInventory(data));
// }

return(
  <div>
  <h2>Complete Inventory </h2>
    {/* {item ? <Item id={key} item = {item} setItem = {setItem} auth ={props.auth} user ={props.userID}/>
     : inventory.map((item, key)=>{
    <Item id={key} item = {item} setItem = {setItem} auth ={props.auth} user ={props.userID}/>
  })} */}
  </div>
)

}
