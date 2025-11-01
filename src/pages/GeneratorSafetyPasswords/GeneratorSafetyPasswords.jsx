import React, { useState } from 'react'

export default function GeneratorSafetyPasswords ()  {
  const [password, setPassword] = useState('')
  const [length,  setLength] = useState(8)
  function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=;:,./?|`~[]{}"
        let retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(retVal)
    setPassword(retVal);
}
 
return (
    <div><h2>GeneratorSafetyPasswords</h2>
  <input type="text"onChange={e =>setLength(e.target.value)} value={length} className="elementvalue" />
    <p>{password}</p>
        <button onClick={generatePassword}>Generate</button>
    </div>
  )
}
