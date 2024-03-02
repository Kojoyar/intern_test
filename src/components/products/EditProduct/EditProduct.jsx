import React, { useEffect, useState } from 'react'
import { useProducts } from '../../../contexts/ProductContextProvider';
import { useNavigate, useParams } from 'react-router-dom';
import '../../../styles/editProduct.css';
import '../../../styles/AddProduct.css'

const EditProduct = () => {
  const {getProductDetails, productDetails, saveEditedProduct} = useProducts()
  const [product, setProduct] = useState(productDetails)
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    getProductDetails(id)
  }, []);

  useEffect(() => {
    setProduct(productDetails)
  }, [productDetails])

  const handleInp = e => {
    if(e.target.name === 'price') {
      let obj = {
        ...product,
        price: Number(e.target.value)
      };
      setProduct(obj)
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value
      };
      setProduct(obj)
    }
  }

  return (
    <>
      {product? (
        <div style={{textAlign: 'center', padding: '3rem'}} >
        <h2 style={{color: 'white', padding: '1rem'}} >Edit product</h2>
        <input className='add_inp' type="text" placeholder='' value={product.name} name='name' onChange={handleInp} /> <br />
        <input className='add_inp' type="text" placeholder='Number' value={product.number}  name='number' onChange={handleInp} /> <br />
        <input className='add_inp' type="text" placeholder='Picture' value={product.picture}  name='picture' onChange={handleInp} /> <br />
        <input className='add_inp' type="text" placeholder='Email' name='email' value={product.email} onChange={handleInp} /> <br />

        <button style={{marginTop: '2rem'}} className='button-3' role='button' onClick={() => {
          saveEditedProduct(product)
          navigate('/products')
        }} >
          Save Changes
        </button>
      </div>
      ): (
        <h1>...Loading</h1>
      )}
    </>
  )
}

export default EditProduct