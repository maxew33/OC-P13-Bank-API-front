import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'

// REDUX
import { Provider } from 'react-redux'
import { store } from './app/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
