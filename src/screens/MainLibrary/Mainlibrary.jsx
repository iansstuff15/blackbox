import React from 'react';
import axios from 'axios';


axios.get('https://api.rawg.io/api/games?key=60a3a4e6c1dc496b84eef0a2b8d33fa5',
    {
       headers:{
        'Content-Type': 'application/json',
       } 
    }
).then(res => {
    //the game library appears here and assign codes using res.data.result
    console.log(res)}
    ).catch(error =>
        console.log(error)
    ) 

class Mainlibrary extends React.Component{
    render(){
        return(
            <h1>hello </h1>
        )
    }
}

export default Mainlibrary;
