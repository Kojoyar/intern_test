import React from 'react'
import Navbar from './components/Navbar/Navbar'
import AuthContextProvider from './contexts/AuthContextProvider'
import CartContextProvider from './contexts/CartContextProvider'
import ProductContextProvider from './contexts/ProductContextProvider'
import MainRoutes from './MainRoutes'

const App = () => {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <AuthContextProvider>
          <Navbar/>
          <MainRoutes/>
        </AuthContextProvider>
      </ProductContextProvider>
    </CartContextProvider>
  )
}

export default App