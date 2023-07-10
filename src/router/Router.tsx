
import {Routes, Route} from 'react-router-dom'

import Error from '../pages/Error'
import Index from '../pages/Index'
import SignIn from '../pages/SignIn'
import User from '../pages/User'

export default function Router() {

    const path = [
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
    ]
    return (
        <Routes>
            {path.map((e, idx) => (
                <Route path={e.path} element={e.element} key={idx} />
            ))}
        </Routes>
    )
}