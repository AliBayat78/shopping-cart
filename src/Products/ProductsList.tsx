import { useSelector } from 'react-redux'
import { addProduct, selectedProducts } from '../redux/ProductsSlice'


const ProductsList: React.FC = () => {
  const products = useSelector(selectedProducts)


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
          addProduct({
            title: 'Half Life',
            price: 200,
            id: 'hl',
          })
        }
      >
        Add Products
      </button>
    </div>
  )
}

export default ProductsList
