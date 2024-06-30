import React, { useState } from 'react'

function ColorPicker() {
    const [color, setColor] = useState("#000");

    const handleChange = (e) => {
        setColor(e.target.value);
    }

    return (
        <div className='m-10 flex flex-col items-center'>
            <h1 className='text-4xl font-medium p-5 text-neutral-600'>Color Picker</h1>
            <h1 style={{ backgroundColor: `${color}` }} className='p-16 text-2xl font-medium w-80 text-center rounded text-neutral-700'>Selected color: <br /><span className='font-bold text-black'>{color}</span></h1>

            <input value={color} onChange={handleChange} className='p-8 text-3xl font-bold w-80 text-center text-neutral-700' />

            <div className='flex items-center text-xl font-semibold'>
                <label htmlFor="color">Choose color: </label>
                <input name='color' className='m-5' value={color} onChange={handleChange} type='color' placeholder='Choose color:' />
            </div>
        </div>
    )
}

export default ColorPicker
