/* eslint-disable react/prop-types */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Calculator  = (a, b, operator) => {
if (operator === '%') {
     return Number(a) / Number(b);
  }
  else if (operator === 'x'){
      return Number(a) * Number(b);
  }
  else if (operator === '-'){
      return Number(a) - Number(b);
  }
  else if (operator === '+'){
      return Number(a) + Number(b);
  }
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Calculator/>
      </div>
    </>
  )
}

export default App