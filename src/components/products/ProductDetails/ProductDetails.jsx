import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../../contexts/ProductContextProvider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductDetails = () => {
  const {getProductDetails, productDetails} = useProducts()
  const {id} = useParams()

  useEffect(() => {
    getProductDetails(id)
  }, [])

  
  return (
    <>
      {productDetails? (
        <Card style={{margin: '1%'}} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image={productDetails.picture}
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            Name: {productDetails.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Number: {productDetails.number}
          </Typography>
        </CardContent>
      </Card>
      ): (
        <h1>...Loading</h1>
      )}
    </>
  )
}

export default ProductDetails