import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

import './style/style.css'

function App() {
    return (
        <>
            <Header />
            <>
                <Outlet />
            </>
            <Footer />
        </>
    )
}

export default App
