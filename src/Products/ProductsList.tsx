import { useState } from 'react'
import { Product } from '../models/models'

const ProductsList: React.FC = () => {
  const initialProducts = [
    { title: 'Counter Strike', price: 20, id: 'cs' },
    { title: 'God of War', price: 420, id: 'gow' },
    { title: 'Crash Bash', price: 50, id: 'cb' },
    { title: 'Dota 2', price: 127, id: 'd2' },
  ]

  const [products, setProducts] = useState<Product[]>(initialProducts)

  return (
    <div>
      <h1>Games List</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <span>{`${product.title} : ${product.price}`}</span>
          </div>
        )
      })}
      <button
        className="bg-cyan-400"
        onClick={() =>
          setProducts((prevProducts) => [
            ...prevProducts,
            {
              title: 'Half Life',
              price: 200,
              id: 'hl',
            },
          ])
        }
      >
        Add Products
      </button>
    </div>
  )
}

export default ProductsList
