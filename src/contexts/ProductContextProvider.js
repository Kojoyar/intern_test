import React, {createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import {ACTION, JSON_API_PRODUCTS} from '../helpers/consts';
import { useNavigate, useLocation } from 'react-router-dom';

export const productContext = createContext();
export const useProducts = () => useContext(productContext)
const INIT_STATE = {
    products: [],
    productDetails: null
}

const reducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case ACTION.GET_PRODUCT:
            return {...state, products: action.payload}
        case ACTION.GET_PRODUCT_DETAILS:
            return {...state, productDetails: action.payload}
        default:
            return state
    }
}
const ProductContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const naviagte = useNavigate()
    const location = useLocation()

    const getProducts = async () => {
        const {data} = await axios(`${JSON_API_PRODUCTS}/${window.location.search}`)
        dispatch({
            type: ACTION.GET_PRODUCT,
            payload: data
        })
    }

    async function addProduct(newObj)  {
        await axios.post(JSON_API_PRODUCTS, newObj)
        getProducts()
    }

    const getProductDetails = async (id) => {
        dispatch({
            type: ACTION.GET_PRODUCT_DETAILS,
            payload: null
        })
        const {data} = await axios(`${JSON_API_PRODUCTS}/${id}`)
        dispatch({
            type: ACTION.GET_PRODUCT_DETAILS,
            payload: data
        })
    }

    async function saveEditedProduct(newProduct) {
        await axios.patch(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct)
        getProducts()
    }

    async function deleteProduct(id) {
        await axios.delete(`${JSON_API_PRODUCTS}/${id}`)
        getProducts()
    }

    const fetchByParams = (query, value) => {
        const search = new URLSearchParams(location.search);
        if(value == 'all') {
            search.delete(query);
        } else {
            search.set(query, value)
        };

        const url = `${location.pathname}?${search.toString()}`

        naviagte(url)
    }

    const values = {
        products: state.products,
        productDetails: state.productDetails,
        getProducts,
        addProduct,
        getProductDetails,
        saveEditedProduct,
        deleteProduct,
        fetchByParams
    }



  return (
    <productContext.Provider value={values} >
        {children}
    </productContext.Provider>
  )
}

export default ProductContextProvider