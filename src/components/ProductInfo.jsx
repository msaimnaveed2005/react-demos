import React from 'react'

const ProductInfo = () => {
    const product =
    {
        name: 'Laptop',
        price:120,
        availaibiity:'In-Stock',
    };

  return (
    <div>
        <h1>Name: {product.name}</h1>
        <h1>Price: ${product.price}</h1>
        <h1>Availaibiity: {product.availaibiity}</h1>
    </div>
  )
}

export default ProductInfo