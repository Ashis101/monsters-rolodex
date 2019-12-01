import React from 'react'
import './card-list.stylr.css'
import Card from '../card/card-component'

const Cardlist=(props)=>{
 
        return (
            <div className='card-list'>
            {props.monsters.map(users=>
                <Card key={users.id} monster={users} />
                )}
            </div>
        )
}

export default Cardlist