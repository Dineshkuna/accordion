import React, { useState } from 'react'

function RandomColor() {
    const [color, setColor] = useState('#000000');

    const generateColor = () => {
        let colorChars = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let colorCode = '#';
        for (let i = 0; i < 6; i++) {
            colorCode += colorChars[Math.floor(Math.random() * colorChars.length)];
            
    }
    setColor(colorCode)
    }

    return (
        <div style={{   
                
            backgroundColor : color,
            width: "100vh",
            height: "100vh"
        }}>
            
            <button>Create rgb color</button>
            <button>Create hex color</button>
            <button onClick={()=>generateColor()}>Generate random Color</button>
            <p>current Color : {color}</p>
        </div>
    )
}

export default RandomColor;