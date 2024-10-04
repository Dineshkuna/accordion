import React, { useState }  from 'react'

const ChangeThemeBg = () => { 
    const[color, setColor] = useState("white");
    
    const handleColor = () => {
        setColor((prevColor) => (prevColor === "white" ? "black" : "white"))

    }
    return(
        <div style={{backgroundColor : color , height : "200vh", padding : "20px"}}>
            <p>ChangeTheme</p>
            <button onClick={handleColor} >ThemeColor</button>
        </div>
    )
}

export default ChangeThemeBg;