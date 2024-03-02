import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';


const ProductCard = ({card}) => {
  const {deleteProduct} = useProducts()
  const navigate = useNavigate()
  return (
    <>
    <Card style={{margin: '1%'}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image={card.picture}
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
         Name: {card.name}
        </Typography> */}
        <Typography variant="body2" color="text.secondary">
          Name: {card.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Number: {card.number}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {card.email}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Desc: {card.description}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/details/${card.id}`)} size="small">Details</Button>
        <Button onClick={() => navigate(`/edit/${card.id}`)} size="small">Edit</Button>
        <Button onClick={() => deleteProduct(card.id)} size="small">Delete</Button>
      </CardActions>
    </Card>
    </>
  )
}

export default ProductCard