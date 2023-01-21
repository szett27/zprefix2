import { useState } from "react"
import {Button, Card, CardContent, Typography, Stack, Switch} from '@mui/material'


export default function Item(props){

    const [item_name, setItem_Name] = useState(props.item.name)
    const [description, setDescription] = useState(props.item.description)
    const [quantity, setQuantity] = useState(props.item.quantity)
    const [item_id, setItem_id] = useState(props.item.id)
    const [edit, setEdit] = useState(false)
    console.log(props.item)
    return(
       <div>
        <Card>
        <CardContent>
        {props.auth && props.user === props.item.user_id ?<Stack direction="row" spacing={1} alignItems="center"> <Typography></Typography><Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>Edit</Typography></Stack> : <></>}
      <Typography sx={{ fontSize: 14 }} editable = {edit} color="text.secondary" gutterBottom>
        {item_name}
      </Typography>
      <Typography sx={{ fontSize: 14 }} editable = {edit} color="text.secondary" gutterBottom>
        {quantity}
      </Typography>
      <Typography sx={{ fontSize: 14 }} editable = {edit}  color="text.secondary" gutterBottom>
        {description}
      </Typography>
      {props.auth && props.user === props.item.user_id ? <Button >Delete</Button>: <></>}
        </CardContent>
        </Card>
       </div>

    )
}