import { configureStore } from '@reduxjs/toolkit'
import loggedReducer from '../reducers/loggedReducer'
import profileReducer from '../reducers/profileReducer'

const store = configureStore({
    reducer: {
        logged: loggedReducer,
        getProfile: profileReducer
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
