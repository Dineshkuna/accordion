import React, { useState }  from 'react'

const ChangeThemeBg = () => { 
    const[color, setColor] = useState("white");
    
    const handleColor = () => {
        setColor((prevColor) => (prevColor === "white" ? "black" : "white"))

    }
    return(
        <div style={{backgroundColor : color , height : "200vh", padding : "20px"}}>
            <p style= {{color : "yellow", fontSize : "19px" , fontWeight : "bold" }}>ChangeTheme</p>
            <button style={{padding : "20px 40px" , fontSize : "15px"}} onClick={handleColor} >ThemeColor</button>
        </div>
    )
}

export default ChangeThemeBg;