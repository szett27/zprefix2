import './App.css';
import Login from './Login';
import Navbar from './Navbar'
import {useState} from 'react';
import Inventory from './Inventory';
import CreateAccount from './CreateAccount';
import CreateItem from './CreateItem';
import { createTheme } from '@mui/system';
import { ThemeProvider } from '@emotion/react';
import {blue, pink} from '@mui/material/colors';
function App() {
  const[loginStatus, setLoginStatus] = useState(false)
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState(0)
  const [createAccount, setCreateAccount] = useState(false)



  return(

    <div>
      <Navbar loginStatus = {loginStatus} setLoginStatus = {setLoginStatus} setAuth = {setAuth} auth = {auth} user = {user}/>

{loginStatus ? <Login loginStatus = {loginStatus} setCreateAccount = {setCreateAccount} setLoginStatus = {setLoginStatus} setAuth = {setAuth} auth = {auth} user = {user} setUser = {setUser}/> : 
createAccount ? <CreateAccount setAuth = {setAuth} setUser = {setUser} setCreateAccount = {setCreateAccount} loginStatus = {setLoginStatus}/>
: auth && createItem ? <CreateItem user = {user} /> :
<Inventory auth = {auth} user = {user} /> }
  </div>

  )
}

export default App;
