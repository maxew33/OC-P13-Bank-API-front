import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    isLogged: false,
    hadToken: false,
}

//the action
export const userIsLogged = createAction('userIsLogged')
export const userHadToken = createAction('userHadToken')

//the reducer
export default createReducer(initialState, (builder) => {
    builder
        .addCase(userIsLogged, (state) => {
            state.isLogged = !state.isLogged
        })
        .addCase(userHadToken, (state) => {
            state.hadToken = !state.hadToken
        })
})
