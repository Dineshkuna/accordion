import React, { useState } from 'react'
import QRCode from 'react-qr-code'


const QrCode = () => {
    const[input , SetInput] = useState("")
    const[qrCode, SetQrCode] = useState("")

    const handleQr=()=>{
        SetQrCode(input)
        SetInput("")
    }
    return(
        <div>
            <p>Qr Generator</p>
            <div>
                <input 
                onChange={(e) => SetInput(e.target.value)} 
                placeholder='Enter Your Name' 
                type='text' 
                value={input}/>
                <button onClick={handleQr}>Generate</button>
            </div>
            <br/>
            <div>
                <QRCode id="qr-code-value" value={qrCode} size={300} bgColor="#fff"/>
            </div>
        </div>
    )
}
export default QrCode;