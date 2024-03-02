import React, { useState } from 'react'
import ProductList from '../components/products/ProductList/ProductList'
import ProductSideBar from '../components/products/ProductSideBar/ProductSideBar';
import '../styles/ProductPage.css'

const ProductsPage = () => {
  const [isSideBar, setIsSideBar] = useState(false)
  const [page, setPage] = useState(1)

  function changeSideBarStatus() {
    setIsSideBar(!isSideBar);
  }

  return (
    <div className='productsPage' >
      <ProductSideBar isSidebar={isSideBar} setPage={setPage}
      />
      <ProductList page={page} setPage={setPage} changeSideBarStatus={changeSideBarStatus} />
    </div>
  )
}

export default ProductsPage