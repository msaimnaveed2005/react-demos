import React from 'react'

const ProductList = () => {
  const products=[
    {id:1, name:'Phone', price:1200},
    {id:2, name:'Dish Antenna', price:200},
    {id:3, name:'TV', price:1500},

  ]
    return (
    <div>
         {products.map((product)=>(
            <ul key={product.id}>
                <li>Name: {product.name}</li>
                <li>Price: {product.price}</li>

            </ul>
        ))}
    </div>
  )
}

export default ProductList