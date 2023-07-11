import { configureStore } from '@reduxjs/toolkit'
import userIsLogged from '../reducers/loggedReducer'
import userProfileReducer from '../reducers/userProfileReducer'
import errorReducer from '../reducers/errorReducer'

const store = configureStore({
    reducer: {
        logged: userIsLogged,
        userProfile: userProfileReducer,
        error: errorReducer
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
