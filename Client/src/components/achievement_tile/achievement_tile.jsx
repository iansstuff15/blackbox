import React from 'react'
import './achievement_tile.css'

const AchievementTile = ({name,image})=>(
    <div className='achievement-tile'
    
    
    >

        <img src={image} alt='achievement image' className='achievement-image'/>
        <h4 className='achievement-name'>{name}</h4>
    </div>
)

export default AchievementTile