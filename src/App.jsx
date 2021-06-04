import React, { useState } from 'react'

export function App() {
  // define STATE and setSTATE of the value of the computed total
  const [display, setDisplay] = useState(0)
  const [storedNumber, setStoredNumber] = useState(0)
  const [operator, setOperator] = useState('')

  function handleClear() {
    setDisplay(0)
    setStoredNumber(0)
    setOperator('')
  }

  function handleNumClick(event) {
    setDisplay(display + event.target.value)
  }
  function handleOperator(event) {
    setStoredNumber(parseInt(display))
    setDisplay(0)
    setOperator(event.target.textContent)
  }

  function handleEqual() {
    // switch statement to handle different operators
    // setDisplay(parseInt(storedNumber) + parseInt(display))
    if (display && storedNumber) {
      switch (operator) {
        case '+':
          setDisplay(parseInt(storedNumber) + parseInt(display))
          break
        case '-':
          setDisplay(parseInt(storedNumber) - parseInt(display))
          break
        case '*':
          setDisplay(parseInt(storedNumber) * parseInt(display))
          break
        case '/':
          setDisplay(parseInt(storedNumber) / parseInt(display))
          break
        default:
          break
      }
    }
    console.log(`stored number: ${storedNumber}`)
    console.log(`display number: ${display}`)
  }

  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn" onClick={handleClear}>
            AC
          </button>
          <button className="button fn">&plusmn;</button>
          <button className="button fn">%</button>
          <button className="button op" onClick={handleOperator}>
            /
          </button>
          <button className="button" value={7} onClick={handleNumClick}>
            7
          </button>
          <button className="button" value={8} onClick={handleNumClick}>
            8
          </button>
          <button className="button" value={9} onClick={handleNumClick}>
            9
          </button>
          <button className="button op" onClick={handleOperator}>
            *
          </button>
          <button className="button" value={4} onClick={handleNumClick}>
            4
          </button>
          <button className="button" value={5} onClick={handleNumClick}>
            5
          </button>
          <button className="button" value={6} onClick={handleNumClick}>
            6
          </button>
          <button className="button op" onClick={handleOperator}>
            -
          </button>
          <button className="button" value={1} onClick={handleNumClick}>
            1
          </button>
          <button className="button" value={2} onClick={handleNumClick}>
            2
          </button>
          <button className="button" value={3} onClick={handleNumClick}>
            3
          </button>
          <button className="button op" onClick={handleOperator}>
            +
          </button>
          <button className="button x2" value={0} onClick={handleNumClick}>
            0
          </button>
          <button className="button">.</button>
          <button className="button op" onClick={handleEqual}>
            =
          </button>
        </div>
      </div>
    </main>
  )
}
