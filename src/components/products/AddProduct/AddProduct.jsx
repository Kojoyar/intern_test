import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useProducts } from '../../../contexts/ProductContextProvider';
import '../../../styles/AddProduct.css'

const AddProduct = () => {
  const navigate = useNavigate();
  const {addProduct} = useProducts() 
  const [product, setProduct] = useState({
    name: '',
    number: '',
    picture: '',
    email: ''
  })


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
    <div style={{textAlign: 'center', paddingTop: '5rem'}} >
      <h2>Add user</h2>
      <input className='add_inp' type="text" placeholder='Name' name='name' onChange={handleInp} /> <br />
      <input className='add_inp' type="text" placeholder='Number' name='number' onChange={handleInp} /> <br />
      <input className='add_inp' type="text" placeholder='Picture' name='picture' onChange={handleInp} /> <br />
      <input className='add_inp' type="text" placeholder='Email' name='email' onChange={handleInp} /> <br />

      <button className='btn_saveChange' onClick={() => {
        addProduct(product);
        navigate('/products')
      }} >
        Save
      </button>
    </div>
  )
}

export default AddProduct