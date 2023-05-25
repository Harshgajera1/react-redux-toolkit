import { useState } from 'react'
import { increment, decrement, incrementByAmount, clear } from './redux/slices/CounterSlice'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { formData } from './redux/slices/FormData'
import { store } from './redux/Store'

function App() {

  const reduxState = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  console.log(reduxState.formdata)

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
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              aria-label="Decrement value"
              onClick={() => store.getState().counter.value = 12}
            >
              clear
            </button>
            <br/>
            <label>Enter Name : </label>
            <input name='fname' type='text' onChange={(e)=>dispatch(formData({ name: e.target.name, value: e.target.value }))}/><br/>
            <input name='lname' type='text' onChange={(e)=>dispatch(formData({ name: e.target.name, value: e.target.value }))}/><br/>
            <input name='age' type='number' onChange={(e)=>dispatch(formData({ name: e.target.name, value: e.target.value }))}/>
          </div>
        </div>
      </header>
    </div>
    </>
  )
}

export default App
