import { createAction, createReducer } from '@reduxjs/toolkit'

//the action
export const getUserProfileInfos = createAction('getUserProfileInfos')

//the reducer
export default createReducer({data: null}, (builder) => {
    builder.addCase(getUserProfileInfos, (state, action) => 
    {
        console.log(action)
        action.payload && (state.data = action.payload)
    });
})
