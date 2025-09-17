import { useState } from 'react'
import './App.css'
import ProductCard from './ProductCard'

function App() {
  const [count, setCount] = useState(0)

  const products = [
    { name: 'Wireless Mouse', price: 25.99, inStock: true },
    { name: 'Mechanical Keyboard', price: 89.99, inStock: false },
    { name: 'HD Monitor', price: 199.99, inStock: true }
  ];

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '24px' }}>Product List</h1>
      
      <div style={{ display: 'flex', gap: '16px', marginTop: '32px', justifyContent: 'center' }}>
        {products.map((product, idx) => (
          <ProductCard
            key={idx}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </>
  )
}

export default App
