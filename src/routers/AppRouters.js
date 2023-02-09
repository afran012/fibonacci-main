import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Dasboard } from './Dahboard'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Login from "../components/Login"
import Register from "../components/Register"


const AppRouters = () => {

    const [checking, setchecking] = useState(true)
    const [isLogin, setisLogin] = useState(false)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setisLogin(true)
            }
            else {
                setisLogin(false)
            }
            setchecking(false)
        })
    }, [setisLogin, setchecking])


    if (checking) {
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <div>
            <Router>
                <Routes>
               

                    <Route path='/' element={<PublicRouter isAuthenticated={isLogin}>
                        <Login />

                    </PublicRouter >} />
                    <Route path='/*' element={<PrivateRouter isAuthenticated={isLogin}>
                        <Dasboard />
                    </PrivateRouter >} />
                    <Route path='/Register' element={<PublicRouter isAuthenticated={isLogin}>
                        <Register />
                    </PublicRouter>} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouters