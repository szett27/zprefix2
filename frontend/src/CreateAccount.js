



function CreateAccount(){
        const [userName, setUserName] = useState('');
        const [password, setPassword] = useState('');
        const [email, setEmail] = useState('');
        const [userType, setUserType] = useState('')
    function newUser(){
        //create new user
        //call post route
    }
    
    return(
        <div id = 'newUser'>
            <form onSubmit = {()=>newUser()}>
            <TextField id="outlined-basic" label="Enter Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <TextField id="outlined-basic" label="email" variant="outlined" />
            <TextField id="outlined-basic" label="UserType" variant="outlined" />
            </form>
        </div>

    )



}

export default CreateAccount