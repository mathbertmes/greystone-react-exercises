import { useState } from "react"


const Exercise13 = () => {
  const [counter, setCounter] = useState(0)
  const [show, setShow] = useState(true)

  const handlePlusCounter = (number) => {
    const newCounter = counter + number
    setCounter(newCounter)
  }

  const handleResetCounter = () => {
    setCounter(0)
  }

  const handleMinusCounter = (number) => {
    const newCounter = counter - number
    setCounter(newCounter)
  }

  const handleDivCounter = (number) => {
    const newCounter = counter / number
    setCounter(newCounter)
  }

  const handleShowCounter = () => {
    setShow(true)
  }

  const handleHiddenCounter = () => {
    setShow(false)
  }

  return(
    <div>
      {show ? (
        <h2>{counter}</h2>
      ) : (
        <h3>Hidden</h3>
      )}
      <div>
        <button onClick={() => handlePlusCounter(1)}>+1</button>
        <button onClick={() => handlePlusCounter(5)}>+5</button>
        <button onClick={handleResetCounter}>Reset</button>
        <button onClick={() => handleMinusCounter(1)}>-1</button>
        <button onClick={() => handleMinusCounter(5)}>-5</button>
        <button onClick={() => handleDivCounter(2)}>/2</button>
        <button onClick={() => handleDivCounter(5)}>/5</button>
      </div>
      <div>
        <button onClick={handleShowCounter}>Show</button>
        <button onClick={handleHiddenCounter}>Hidden</button>
      </div>
    </div>
  )
}

export default Exercise13