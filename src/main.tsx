import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import {
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'

// REDUX
import { Provider } from 'react-redux'
import store from './store/store.ts'
import Index from './pages/Index.tsx'
import Error from './pages/Error.tsx'

import './style/style.css'
import Login from './pages/Login.tsx'
import Profile from './pages/Profile.tsx'

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
                path: '/login',
                element: <Login />,
            },
            {
                path: '/profile',
                element: <Profile />,
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
