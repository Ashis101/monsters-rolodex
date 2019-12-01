import React from 'react'
import './style-box.component.css'

 const Searchbox=({placeholder,handelchange})=>{
    return(
    <input
    className='search'
    type="search"
    placeholder={placeholder}
    onChange={handelchange} />
    )    
}

export default Searchbox