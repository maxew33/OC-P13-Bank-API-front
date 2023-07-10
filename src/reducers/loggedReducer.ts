import { createAction, createReducer } from '@reduxjs/toolkit'

//the action
export const userIsLogged = createAction('userIsLogged')

//the reducer
export default createReducer(false, (builder) => {
    builder.addCase(userIsLogged, (state) => !state)
})
