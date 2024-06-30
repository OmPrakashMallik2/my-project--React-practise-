import React from 'react'
import Hello from './assets/hello.jpg'
import './index.css'

function Card() {
    return (
        <div className='card'>
            <img className='card-image' src={Hello} alt="hello" />
            <h2 className='card-title' >Card Title</h2>
            <p className='card-desc'>Description for the card here.</p>
        </div>
    )
}

export default Card
