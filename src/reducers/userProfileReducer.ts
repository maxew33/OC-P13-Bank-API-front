import { PayloadAction, createAction, createReducer } from '@reduxjs/toolkit'
import UserProfile from '../types/userProfile'

const initialState: UserProfile = {
    data: null,
}

//the action
export const getUserProfileInfos = createAction('getUserProfileInfos')
export const updateUserFirstName = createAction<string>('updateUserFirstName')
export const updateUserLastName = createAction<string>('updateUserLastName')

//the reducer
export default createReducer(initialState, (builder) => {
    builder
        .addCase(getUserProfileInfos, (state, action) => {
            action.payload && (state.data = action.payload)
        })
        .addCase(
            updateUserFirstName,
            (state, action: PayloadAction<string>) => {
                if (state.data && action.payload) {
                    state.data.firstName = action.payload
                }
            }
        )
        .addCase(updateUserLastName, (state, action) => {
            if (state.data && action.payload) {
                state.data.lastName = action.payload
            }
        })
})
