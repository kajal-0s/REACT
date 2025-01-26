import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)
 /*counter = variable
  setCounter = function which is responsible for updating variables
  */
  const addValue = () => {
   setCounter(counter+1)
  }

  const removeValue = () => { 
    setCounter = (counter-1)
}

  

  return (
    <>
    <h1>welcome to React</h1>
    <h2>Counter value:{counter}</h2>

    <button 
    onClick={addValue}>add value{counter}</button>
  <br  />  
    <button
    onClick={removeValue}>remove value {counter}</button>

    <p>footer: {counter}</p>
    </>
  )
}
export default App