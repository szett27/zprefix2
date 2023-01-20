



export default function CreateItem(props){
    const [itemName, setItemName] = useState('');
    const[itemQuantity, setItemQuantity] =useState(0)
    const[itemDescription, setItemDescription] = useState('')


    function addItem(e){
        e.preventDefault();
        const data = {"itemName": itemName, "itemQuantity": itemQuantity, "itemDescription": itemDescription, "userId": props.userId}
        e.preventDefault();
        fetch('http://localhost:5000/item', 
        {method: 'POST', 
         headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(data)})
    .then(res=>res.json())
    .then(window.alert(`${itemName} added to system`))
    .then(props.setItem(false))
    }
    
    return(

            <div id = 'newItem'>
                <h1>Create a New Account</h1>
                <form onSubmit = {(e)=>makeUser(e)}>
                <TextField id="outlined-basic" label="ItemName" variant="outlined" value = {itemName} onChange={(e)=>setItemName(e.target.value)} /><br></br>
                <TextField id="outlined-basic" label="ItemQuantity" variant="outlined" value = {itemQuantity} onChange = {(e)=>setItemQuantity(e.target.value)}/><br></br>
                <TextField id="outlined-basic" label="ItemDescription" variant="outlined" value = {itemDescription} onChange={(e)=>setItemDescription(e.target.value)}/><br></br>
                <Button type = "submit">Create User</Button>
                </form>
            </div>
    
    )


    }

