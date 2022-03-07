import React from 'react'
import { Link, } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './game_card.css'

const GameCard = ({gameName,gameIMG,gameReleased, gameGenre, gameData}) =>{ 
    let navigate = useNavigate();
    return(
 
    <div className='game-card' 
    
    style={{
        backgroundImage: `url(${gameIMG})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundBlendMode:'lighten',
        backgroundSize:'100%'
           }}
    >
        <div>
        <img src={gameIMG} alt={gameName + ' name'}  className='thumbnail'/>
        {console.log(gameData)}
        <div >
       
        </div>
     

        <h4 className='card-title'> 
            
            {gameName}
        </h4>
        <h5 className='card-subtitle'>
            
            Released on: {gameReleased}
        </h5>
        <h5 className='card-text'>
            
            {gameGenre}
        </h5>
        
        <div className='learn-more-button' onClick={
            ()=>{
                navigate(`/game/${gameData.id}`, {state:gameData})
            }
        } >
            <h5 className='learn-more-text'>
                Learn more
            
            </h5>
        </div>

     
        
        </div>

      
    </div>
)}

export default GameCard