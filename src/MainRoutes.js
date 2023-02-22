import React from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage';
import { Route, Routes } from 'react-router-dom'

const MainRoutes = () => {
    const PUBLIC = [
        {
            link: '/register',
            element: <RegisterPage/>,
            id: 1
        },
        {
            link: '/login',
            element: <LoginPage/> ,
            id: 1
        },
        {
            link: '/',
            element: <HomePage/>,
            id: 1
        },
        {
            link: '*',
            element: <NotFoundPage/>,
            id: 1
        },
    ]
  return (
    <Routes>
        {PUBLIC.map(item => (
            <Route path={item.link} element={item.element} key={item.id} />
        ))}
    </Routes>
  )
}

export default MainRoutes