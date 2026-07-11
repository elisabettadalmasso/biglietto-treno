import { useState } from 'react'
import './App.css'

function App() {
  const [km, setKm] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [result, setResult] = useState<string>('')

  function calculatePrice() {
    const numKm = Number(km)
    const numAge = Number(age)
    const basePrice = numKm * 0.21
    let finalPrice
    if (numAge <18) {
      finalPrice = basePrice * 0.8
    } else if(numAge > 65) {
      finalPrice = basePrice * 0.6
    } else {
      finalPrice =basePrice
    }
    setResult(finalPrice.toFixed(2))
  }

  return (
    <div>
      <input value={km} onChange={(e) => setKm(e.target.value)} 
      className='border'
      />

      <input value={age} onChange={(e) => setAge(e.target.value)} 
      className='border'
      />
      <p>
      <button onClick={calculatePrice}
      className='border cursor-pointer'>Calcola</button>
      <p>{result} </p>
      </p>
    </div>
  )
}

export default App
