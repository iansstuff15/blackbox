import React, { useState, useEffect } from 'react'
import { useLocation} from 'react-router-dom'
import './game_page.css'
import axios from 'axios';
import AchievementTile from '../../components/achievement_tile/achievement_tile';
import GenreTile from '../../components/genre-tile/genre-tile';
import {FiExternalLink} from 'react-icons/fi'
import { handleFirebaseSet } from '../../helper/firebase_set';
import store from '../../redux/store';
const GamePage = () => {

  const location = useLocation()
  const [gameData, setGameData] = useState([])
  const [images, setImages] = useState([])
  const [movies, setMovies] = useState([])
  const [achievements, setAchievements] = useState([])
  const [genre,setGenre] = useState([])

 useEffect(() => {
  // Update the document title using the browser API
  // console.log('game data incoming')
  // console.log(location.state.id)
 
    axios.get(`https://blackbox-heroku.herokuapp.com/games/${location.state.id}` ||`http://localhost:8000/games/${location.state.id}`,
        {
        headers:{
            'Content-Type': 'application/json',
            
        } 
        }
    ).then(res => {
        //the game library appears here and assign codes using res.data.result
        setGameData(res.data)
        setGenre(res.data.genres)
        // console.log(gameData)
        // console.log(genre)
      }).catch(error =>console.log(error))

  console.log('incoming images')
      axios.get(`https://blackbox-heroku.herokuapp.com/games/${location.state.id}/screenshots` ||`http://localhost:8000/games/${location.state.id}/screenshots`,
      {
      headers:{
          'Content-Type': 'application/json',
          
      } 
      }
  ).then(res => {
      //the game library appears here and assign codes using res.data.result
      setImages(res.data)
      // console.log(res.data)
    }).catch(error =>console.log(error))



  console.log('incoming movies')

  axios.get(`https://blackbox-heroku.herokuapp.com/games/${location.state.id}/movies` ||`http://localhost:8000/games/${location.state.id}/movies`,
  {
  headers:{
      'Content-Type': 'application/json',
      
  } 
  }
).then(res => {
  //the game library appears here and assign codes using res.data.result
  setMovies(res.data)
  // console.log(movies)
}).catch(error =>console.log(error))
console.log('incoming achievements')
axios.get(`https://blackbox-heroku.herokuapp.com/games/${location.state.id}/achievements` ||`http://localhost:8000/games/${location.state.id}/achievements`,
{
headers:{
    'Content-Type': 'application/json',
    
} 
}
).then(res => {
//the game library appears here and assign codes using res.data.result
setAchievements(res.data)
// console.log(achievements)
}).catch(error =>console.log(error))

},[location.state.id]);

const handleAddLibrary=(gameName, gameId)=>{
  console.log(store.getState().currentUser.uid+' uid')
  const uid = store.getState().currentUser.uid
 const data = {
    gameId
  }
  handleFirebaseSet(`users/${uid}/library/${gameName}`,data)
}

   return(
    <div>
    
      <div className='game-header-image'
       style={{
        backgroundImage: `url(${gameData.background_image})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundBlendMode:'lighten',
        backgroundSize:'100%'
           }}
      >

      </div>
      
      
      <div className='game-info-card'
      
      style={{
        backgroundImage: `url(${gameData.background_image})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundBlendMode:'lighten',
        backgroundSize:'100%'
           }}
      >

      <h5 className='game-title' color={gameData.saturated_color}>
      {gameData.name}
      
      </h5>
      

      <h6 className='game-developers'>Developed by {gameData.developers!=null?gameData.developers[0].name:null}</h6>
      <h6 className='install-button' onClick={()=>{handleAddLibrary(gameData.name,gameData.id)}}>add to library</h6>
      <h6 className='game-esrb_rating'>
      ESRB rating | {gameData.esrb_rating!=null?gameData.esrb_rating.name: null}
      </h6>
      <a href={gameData.metacritic_url} target="_blank" rel = "noreferrer" className='game-metacritic'>
      <h6 >
       Metacritic score | {gameData.metacritic}
       <FiExternalLink className='link-icon'/>
      </h6>
      </a>
   
      <p className='description'>
        {gameData.description_raw}
      </p>
      </div>
     

      <div className='reddit-card'
      
      style={{
        backgroundImage: `url(https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-Complete-White-Dark-Background-Logo.wine.svg)`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundBlendMode:'lighten',
        backgroundSize:'100%'
           }}
      >
          <span className='reddit-name'> 
          <img className='reddit-icon' alt = "reddit-icon" src='https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?width=640&crop=smart&auto=webp&s=bfd318557bf2a5b3602367c9c4d9cd84d917ccd5'/>
          {gameData.reddit_name}
          </span>
          <p className='reddit-description'>
          {gameData.reddit_description}
          </p>
          <a href={gameData.reddit_url} target="_blank" rel = "noreferrer" className='reddit-button'>Check it out<FiExternalLink className='link-icon'/></a>
      </div>

      <h2>Genres</h2>
   
       
      {genre != null? genre.map((genre)=>(
          <span key = {genre.key}>
          <GenreTile genreName={genre.name} genreIMG={genre.image_background} genreCount={genre.games_count}/>
          </span>
        )): null}
      <h2>Screenshots</h2>

 

      <div className='screenshot-list'>

   
      {images.map((item, index)=>
    (

           <img key = {item.id} src={item.image} alt='game-screenshot1' className='game-screenshot'/>
         
     )
     
      )}
         </div>

      {movies.length!=null? 
      <div>
        <h2>Movies</h2>
       <div  className='movie-list'>
       
       {movies.map((item, index)=>
     (
          
            <video key = {item.id} width={'100%'} autoPlay loop className='game-movies' muted>
               <source src={item.data.max} type="video/mp4"/>
              </video>         

          
      )
      
       )}
       </div>
      </div>
     
       :
       null
    }
     
      <h2>Ratings</h2>
      <h2>Achievements</h2>
      {achievements.map((item, index)=>
    (
           <span key = {item.id}>
              <AchievementTile name={item.name} image={item.image}/>
           </span>
     )
     
      )}
    </div>
  )
}



 
 
   



 
export default GamePage