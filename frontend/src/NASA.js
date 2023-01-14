import React from 'react';
import { useState } from 'react';

function NASA(){
    const [pic, setPic] = useState('');

React.useEffect(()=>{
        fetch('https://api.nasa.gov/planetary/apod?api_key=wBCH0ObmvW9orwmXJvb2egLaPE1zisbvSzNhisHY')
        .then(res=>res.json())
        .then(res => {
            setPic(res.url)
            
        })
    });

    let dailyPic = <img src ={pic}></img>

    return(
        <div id = 'NASA'>
            <h2>Astronomy Picture of the Day</h2>
            {dailyPic}
        </div>
    )

}

export default NASA

