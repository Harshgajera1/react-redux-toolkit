import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './slices/CounterSlice'
import counterSlice from './slices/FormData'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
    reducer : {
        counter : CounterReducer,
        formdata : counterSlice,
        masterdata : CounterReducer,
        login : CounterReducer,
        more : CounterReducer,
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

// for data read
export const useAppDispatch: () => AppDispatch = useDispatch
// for actions
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
