import React from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage';
import { Route, Routes } from 'react-router-dom'
import EditProductPage from './pages/EditProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AdminPage from './pages/AdminPage';
import ProductsPage from './pages/ProductsPage';

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
            id: 2
        },
        {
            link: '/',
            element: <HomePage/>,
            id: 3
        },
        {
            link: '*',
            element: <NotFoundPage/>,
            id: 4
        },
        {
            link: '/admin',
            element: <AdminPage/>,
            id: 5
        },
        {
            link: '/products',
            element: <ProductsPage/>,
            id: 6
        },
        {
            link: '/details/:id',
            element: <ProductDetailsPage/>,
            id: 7
        },
        {
            link: '/edit/:id',
            element: <EditProductPage/>,
            id: 8
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