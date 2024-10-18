import Link from 'next/link'
import React from 'react'
import "../product/product.css"

const Product = () => {
  return (
    <div>
      <h1>Nested Product</h1>
      <br />
      <p>
      <Link href="/product">Go Product Page</Link>
      </p>
    </div>
  )
}

export default Product