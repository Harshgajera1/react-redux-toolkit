import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './slices/CounterSlice'
import counterSlice from './slices/data'

export const store = configureStore({
    reducer : {
        counter : CounterReducer,
        data : counterSlice,
        masterdata : CounterReducer,
        formdata : CounterReducer,
        login : CounterReducer,
        more : CounterReducer,
        // posts: postsReducer,
        // comments: commentsReducer,
        // users: usersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
