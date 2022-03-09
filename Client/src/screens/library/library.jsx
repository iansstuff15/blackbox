import React, {useState, useEffect} from 'react'
import { handleGetSnapshotOfLibraryContent } from '../../helper/firebase_get'
import './library.css';
import '../home/home.css'
import GameCard from '../../components/game-card/game_card'
// import {useNavigate} from 'react-router-dom';
import axios from 'axios';
// import firebase from '../../firebase/firebase';
export default function Library() {

        const[games, setGames] = useState([]);

        const fetchForDesign = (gameid) =>{
            return axios.get(`https://blackbox-heroku.herokuapp.com/games/${gameid}` || `http://localhost:8000/games/${gameid}`,
            {
            headers:{
                'Content-Type': 'application/json',
                
            } 
            }
        ).then(res => {
            //the game library appears here and assign codes using res.data.result
            return  res.data
        }).catch(error =>console.log(error))
        }

        useEffect(()=>{
            handleGetSnapshotOfLibraryContent('users', 'library').then(data=> {
            Object.keys(data['0']).map((gameName)=>{
                var name = JSON.stringify(gameName)
                var newname = name.substring(1, name.length-1)
                const gameid = data['0'][newname]['data']['gameId']
                fetchForDesign(gameid).then(data => {setGames((prevState)=>([...prevState, data])) }
                )
                return null
            })
        })

        },[]);  

        return(
            <div className = "home">
                <h1>Game Library</h1>
                 {
                    games?games.map((game) => (
                    <span key = {game.id}>
                    <GameCard gameName={game.name} gameIMG={game.background_image} gameReleased={game.released} gameData={game}/>           
                    </span>
                    )):<p>loading</p>
                    && setGames()
                }
            </div>
        )
    
}
