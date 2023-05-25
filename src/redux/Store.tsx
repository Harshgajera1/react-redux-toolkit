import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './slices/CounterSlice'
import counterSlice from './slices/FormData'

export const store = configureStore({
    reducer : {
        counter : CounterReducer,
        formdata : counterSlice,
        masterdata : CounterReducer,
        login : CounterReducer,
        more : CounterReducer,
        // posts: postsReducer,
        // comments: commentsReducer,
        // users: usersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
