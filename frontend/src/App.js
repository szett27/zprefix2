import './App.css';
import Login from './Login';
import Navbar from './Navbar'
import {useState} from 'react';
import Inventory from './Inventory';
import CreateAccount from './CreateAccount';
function App() {
  const[loginStatus, setLoginStatus] = useState(false)
  const [auth, setAuth] = useState(false)
  const [userid, setuserid] = useState(0)
  const [createUser, setCreateUser] = useState(false)

  console.log(`Login ${loginStatus}, Create User: ${createUser}`)
  return (
    <div className="App">
   <Navbar loginStatus = {loginStatus} setLoginStatus = {setLoginStatus} auth = {auth} userid = {userid}/>
  {loginStatus ? <Login />: setCreateUser ? <CreateAccount/>: <Inventory userid = {userid}/>}
   </div>
  )
}

export default App;
