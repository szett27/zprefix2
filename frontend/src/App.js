import './App.css';
import Login from './Login';
import NASA from './NASA';
import {useState} from 'react';
function App() {
  const[login, setLogin] = useState(false)
  console.log(`Login state ${login}`)

  return (
    <div className="App">
    <h1>CRUD APP</h1>
   {login ? <NASA /> : <Login login = {login} setLogin = {setLogin}/>}
   </div>
  )
}

export default App;
