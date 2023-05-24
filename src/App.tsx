import { useState } from 'react'
import { increment, decrement, incrementByAmount, clear } from './redux/slices/CounterSlice'
import { useAppDispatch, useAppSelector } from './redux/hooks'

function App() {

  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="App">
      <header className="App-header">
        <div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(clear())}
            >
              clear
            </button>
          </div>
        </div>
      </header>
    </div>
    </>
  )
}

export default App
