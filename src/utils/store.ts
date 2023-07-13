import { configureStore } from '@reduxjs/toolkit'
import userProfileReducer from '../reducers/userProfileReducer'
import errorReducer from '../reducers/errorReducer'
import loggedReducer from '../reducers/loggedReducer'

const store = configureStore({
    reducer: {
        logged: loggedReducer,
        userProfile: userProfileReducer,
        error: errorReducer
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
