import { configureStore } from '@reduxjs/toolkit'
import userIsLogged from '../reducers/loggedReducer'
import userProfileReducer from '../reducers/userProfileReducer'

const store = configureStore({
    reducer: {
        logged: userIsLogged,
        userProfile: userProfileReducer,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
