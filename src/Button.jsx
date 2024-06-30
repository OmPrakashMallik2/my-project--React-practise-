import React from 'react'

function Button() {
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    return (
        <div>
            <button style={styles} type="button">Click me</button>
        </div>
    )
}

export default Button
