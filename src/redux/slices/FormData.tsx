import { createSlice, current } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {},
    reducers : {
        formData : (state,action) =>{
            const {name , value} = action.payload
            console.log(current(state))
            return {
                ...state,
                [name] : value
            }
        },
        clearFormData : (state) =>{
            return state = {}
        },
    }
})

export const {formData,clearFormData} = counterSlice.actions
export default counterSlice.reducer
