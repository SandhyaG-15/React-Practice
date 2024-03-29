import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Product from '../Components/Product';

import products from '../Products'
function HomeScreen() {
  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product=>(
                    <Col  key={product._id}sm={12} md={6} lg={3} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
        </Row>
    </div>
  )
}

export default HomeScreen