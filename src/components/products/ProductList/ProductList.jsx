import React, { useEffect, useState } from 'react';
import { useProducts } from '../../../contexts/ProductContextProvider';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '@mui/material/Pagination';
import { Button } from '@mui/material';

const ProductsList = ({changeSideBarStatus, page, setPage}) =>  {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const itemsOnPage = 3;

  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  };

  return (
    <div>
      <h1 style={{color: 'white', textAlign: 'center', padding: '2rem'}} >Users List</h1>
        <Button onClick={changeSideBarStatus}>Filter&Search</Button>

      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}} >
      {products ? (
        currentData().map(item => (
          <ProductCard key={item.id} card={item} />
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>

    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '3rem'}} >
      <Pagination style={{background: 'white'}} count={count} page={page} onChange={handlePage} />
    </div>
    </div>
  )
}

export default ProductsList