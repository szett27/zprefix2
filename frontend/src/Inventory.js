import { Typography } from "@mui/material";



function Inventory(props){
    return(
        <div>
            <Typography>  `Inventory Will go here is userid is 0, then not a manager, current id: {props.userid}` </Typography>
        </div>
    )
}

export default Inventory;