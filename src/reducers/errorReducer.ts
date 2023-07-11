import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    tokenError: false,
    profileError: false,
}

//the action
export const tokenError = createAction('tokenError')
export const profileError = createAction('profileError')

//the reducer
export default createReducer(initialState, (builder) => {
    builder
        .addCase(tokenError, (state) => {
            state.tokenError = !state.tokenError
        })
        .addCase(profileError, (state) => {
            state.profileError = !state.profileError
        })
})
