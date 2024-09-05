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
            
            
            <button style={{
                padding: '10px 20px',
                fontSize: '15px',
                borderRadius: '5px',
                marginTop:'10px'
            }} onClick={()=>generateColor()}>Generate random Color</button>
            <p style={{
                fontWeight: 'bold',
                fontSize: '24px',

            }}>current Color : {color}</p>
        </div>
    )
}

export default RandomColor;