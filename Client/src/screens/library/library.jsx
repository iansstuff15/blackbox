import React, {useState, useEffect} from 'react'
import { handleGetSnapshotOfLibraryContent } from '../../helper/firebase_get'
import './library.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
// import firebase from '../../firebase/firebase';
export default function Library() {
        let navigate = useNavigate()
        const[Library,setLibrary] = useState();
        useEffect(()=>{
            handleGetSnapshotOfLibraryContent().then(data=>setLibrary(data['0']))

            // firebase.database().ref('users').on('value', (snapshot)=> {
            //     const library = snapshot.val();
            //     const getDatabase = [];   
            //     for (let id in library){
            //         // if(id === "vYENHq0syIY1ssVjuK3v13bS3Nx2")
            //         getDatabase.push(library[id])
            //     }
            //     setlibrary(getDatabase)
            //     console.log(getDatabase)
            // })
           
        },[]);

        const fetchUpcoming =  (gameid) =>{
            return axios.get(`https://blackbox-heroku.herokuapp.com/games/${gameid}` || `http://localhost:8000/games/${gameid}`,
                    {
                    headers:{
                        'Content-Type': 'application/json',
                        
                    } 
                    }
                ).then(res => {
                    //the game library appears here and assign codes using res.data.result
                    navigate(`/game/${gameid}`, {state:res.data})
                }).catch(error =>console.log(error))
        }


        return(
            <div>
                
                {Library?Object.keys(Library).map((gameName)=>{
                    var name = JSON.stringify(gameName)
                    var newname = name.substring(1, name.length-1)
                    const gameid = Library[newname]['data']['gameId']
                    
                    return (<h1 key = {name} onClick = {()=>{fetchUpcoming(gameid)}}>{newname}</h1>)
                }) : <p>Loading</p>}
            </div>
        )
    
}
