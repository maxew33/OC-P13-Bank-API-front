import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import {
    BrowserRouter,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'

// REDUX
import { Provider } from 'react-redux'
import store from './utils/store.ts'
import Index from './pages/Index.tsx'
import SignIn from './pages/SignIn.tsx'
import User from './pages/User.tsx'
import Error from './pages/Error.tsx'

import './style/style.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '',
                element: <Index />,
            },
            {
                path: '/sign-in',
                element: <SignIn />,
            },
            {
                path: '/user',
                element: <User />,
            },
            {
                path: '*',
                element: <Error />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
)
