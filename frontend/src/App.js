import './App.css';
import Login from './Login';
import Navbar from './Navbar'
import {useState} from 'react';
import Inventory from './Inventory';
import CreateAccount from './CreateAccount';
import { createTheme } from '@mui/system';
import { ThemeProvider } from '@emotion/react';
import {blue, pink} from '@mui/material/colors';
function App() {
  const[loginStatus, setLoginStatus] = useState(false)
  const [auth, setAuth] = useState(false)
  const [userid, setuserid] = useState(0)
  const [createAccount, setCreateAccount] = useState(false)



  return(

    <div>
      <Navbar loginStatus = {loginStatus} setLoginStatus = {setLoginStatus} auth = {auth} userid = {userid}/>

{loginStatus ? <Login /> : createAccount ? <CreateAccount /> : <Inventory auth = {auth} userid = {userid} /> }
  </div>

  )
}

export default App;
