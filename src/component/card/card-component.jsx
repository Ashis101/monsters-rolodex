import React from 'react'
import './card.style.css'

const Card=(props)=>{

    const {id,name,email}=props.monster
    return(
        <div className='card-container'>
        <img alt='monster' src= {`https://robohash.org/${id}.png?set=set2&size=180 x 180`}/>
        <h3>{name}</h3>
        <p>{email}</p>
        </div>
       
    )
}

export default Card