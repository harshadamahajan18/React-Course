import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    // Interview question how to increase value of counter directly from 15 to 19
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    // note:-  Value of counter directly incresed from 15 to 19
    // if (counter === 20) {
    //   return counter;
    // } else {
    //   setCounter(counter + 1)
    // }
  }

  const removeValue = () => {
    if (counter === 0) {
      return 0;
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove value</button>
      {/* <p>footer: {counter}</p> */}
    </>
  )
}

export default App
