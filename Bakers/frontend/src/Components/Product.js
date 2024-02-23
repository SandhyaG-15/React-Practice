import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating';
import { Link  } from "react-router-dom";
function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded bg-secondary' >
        <Link to={`/product/${product._id}`} >
            <Card.Img style={{minHeight:'250px',maxWidth:'240px'}} src={product.image}></Card.Img>
       </Link>
       <Card.Body className='p-1 m-1'>
            <Link to={`/product/${product._id}`} >
            <Card.Title><strongL>{product.name}</strongL></Card.Title>
            </Link>
            <Card.Text as ="div">
                <div>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#ffff00'} />
                </div>
            </Card.Text>
            <Card.Text as ="div" className='text-muted'>
                <h3>Rs. {product.price}.00</h3>
            </Card.Text>
            {/* <Card.Text as ="div" className='text-muted'>
                <div>
                Weight: {product.Kg} Kg
                </div>
            </Card.Text> */}
       </Card.Body>

    </Card>
  )
}

export default Product