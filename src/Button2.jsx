import React from 'react'

function Button2() {
    let count = 0;
    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            console.log(`${name} stop clicking me.`);
        }
    }

    const handleClick2 = (name) => {
        console.log(`${name} stop clicking me`);
    }
    return (
        <div>
            <button
                onClick={() => handleClick("OPM")}
                className='text-2xl font-bold p-3 m-10 rounded text-white bg-blue-500'
            >Click me 😍</button>
        </div>
    )
}

export default Button2
