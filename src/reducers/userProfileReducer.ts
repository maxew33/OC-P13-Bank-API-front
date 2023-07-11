import { PayloadAction, createAction, createReducer } from '@reduxjs/toolkit'
import UserProfile from '../types/userProfile'

const initialState: UserProfile = {
    data: null,
}

//the action
export const getUserProfileInfos = createAction('getUserProfileInfos')
export const changeUserFirstName = createAction<string>('changeUserFirstName')
export const changeUserLastName = createAction<string>('changeUserLastName')

//the reducer
export default createReducer(initialState, (builder) => {
    builder
        .addCase(getUserProfileInfos, (state, action) => {
            action.payload && (state.data = action.payload)
            console.log(action, state, state.data)
        })
        .addCase(
            changeUserFirstName,
            (state, action: PayloadAction<string>) => {
                if (state.data && action.payload) {
                    state.data.firstName = action.payload
                }
            }
        )
        .addCase(changeUserLastName, (state, action) => {
            if (state.data && action.payload) {
                state.data.lastName = action.payload
            }
        })
})
