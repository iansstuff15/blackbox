import React from 'react'
import './genre-tile.css'
import actionIcon from '../../assets/images/action-icon.png'
import {useNavigate} from 'react-router-dom'
const GenreTile = ({genreName, genreIMG, gamesCount}) => {
    let navigate = useNavigate();

    return(
    <div className='genre-tile' 
    style={{
    backgroundImage: `url(${genreIMG})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundBlendMode:'lighten',
    backgroundSize:'100%'
       }} 
       >
            <img src={genreIMG} alt={genreName+ ' name'} className='genre-thumbnail'/>
           <div className='genre-card'>
          
        <div className='genre-text'>
        <h1 className='genre-name'>{genreName}</h1>
        <div className='explore-button' onClick={
            ()=>{
                navigate(`/genre/${genreName}`, {state:genreName})
            }}>
            <h5>Explore | {gamesCount}+ games</h5>
        </div>
        </div>
           </div>
      
       
    </div>
)}
export default GenreTile