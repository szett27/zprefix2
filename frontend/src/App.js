import './App.css';
import Login from './Login';
import Navbar from './Navbar'
import {useState} from 'react';
import Inventory from './Inventory';
import Item from './item';
import CreateAccount from './CreateAccount';
import CreateItem from './CreateItem';

function App() {
  const[loginStatus, setLoginStatus] = useState(false)
  const [createItem, setCreateItem] = useState(false)
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState(null)
  const [createAccount, setCreateAccount] = useState(false)
  const [myInventory, setMyInventory] = useState(false)
  const [singleItem, setSingleItem] = useState([])



  return(

    <div>
      <Navbar setMyInventory = {setMyInventory} setCreateItem = {setCreateItem} setCreateAccount = {setCreateAccount} loginStatus = {loginStatus} setLoginStatus = {setLoginStatus} setAuth = {setAuth} auth = {auth} user = {user}/>

{loginStatus ? <Login loginStatus = {loginStatus} setMyInventory = {setMyInventory} setCreateAccount = {setCreateAccount} setLoginStatus = {setLoginStatus} setAuth = {setAuth} auth = {auth} user = {user} setUser = {setUser}/> : 
createAccount ? <CreateAccount setAuth = {setAuth} setUser = {setUser} setCreateAccount = {setCreateAccount} loginStatus = {setLoginStatus}/>
: auth && createItem ? <CreateItem setCreateItem = {setCreateItem} setMyInventory = {setMyInventory} user = {user} /> :
singleItem ? <Item item = {singleItem} singleItem = {singleItem} setSingleItem = {setSingleItem} auth ={auth} user ={user}/>
:<Inventory setSingleItem ={setSingleItem} auth = {auth} user = {user} myInventory = {myInventory} setMyInventory= {setMyInventory}/>}
  </div>

  )
}

export default App;
