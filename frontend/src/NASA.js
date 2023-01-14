import { Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';

function NASA(){
    const [pic, setPic] = useState('');
    const [text, setText] = useState('');

React.useEffect(()=>{
        fetch('https://api.nasa.gov/planetary/apod?api_key=wBCH0ObmvW9orwmXJvb2egLaPE1zisbvSzNhisHY')
        .then(res=>res.json())
        .then(res => {
            console.log(res)
            setPic(res.url)
            setText(res.explanation)
            
        })
    });

    let dailyPic = <img src ={pic} alt = {text}></img>

    return(
        <div id = 'NASA'>
            <h2>Astronomy Picture of the Day</h2>
            {dailyPic}
            <Typography>{text}</Typography>
        </div>
    )

}

export default NASA

