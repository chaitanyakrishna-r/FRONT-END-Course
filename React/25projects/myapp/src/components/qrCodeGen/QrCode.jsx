import React, { useState } from 'react'
import QRCode from 'react-qr-code';

const QrCode = () => {
    const [input, setInput] = useState('');
    const [qrCode, setQrCode] = useState('');


    function handleQrClick(){
        setQrCode(input);
        setInput('');
    }
  return (
    <div>
        <h1>QrCode Generator</h1>
        <div>
            <input
            name='qr-code-input' 
            type="text"
            placeholder='Enter the Value'
            value={input}
            onChange={(e)=>setInput(e.target.value)} />
            <button disabled={input && input.trim() !== '' ? false : true} onClick={handleQrClick}>Generate QrCode</button>
        </div>
        <div>
            <QRCode  value={qrCode} id='qr-code' size={400} bgColor='white'/>
        </div>

    </div>
  )
}

export default QrCode