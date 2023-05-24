import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers : {
        inc : (state) => {
            state += 1
        },
        dec : (state) =>{ state -= 1}
    }
})

export const {inc,dec} = counterSlice.actions
export default counterSlice.reducer

