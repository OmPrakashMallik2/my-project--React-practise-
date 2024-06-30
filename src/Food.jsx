import React from 'react'

function Food() {
    const food1 = "Apple";
    const food2 = "Mango";
    const food3 = "Banana";
    return (
        <div>
            <ul>
                <li>food</li>
                <li>{food2}</li>
                <li>{food3.toUpperCase()}</li>
            </ul>
        </div>
    )
}

export default Food
