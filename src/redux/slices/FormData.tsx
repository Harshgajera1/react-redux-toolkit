import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {},
    reducers : {
        formData : (state,action) =>{
            const {name , value} = action.payload
            console.log(state,action.payload,name,value)
            return {
                ...state,
                [name] : value
            }
        },
    }
})

export const {formData} = counterSlice.actions
export default counterSlice.reducer

