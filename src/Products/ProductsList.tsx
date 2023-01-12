import { useSelector } from 'react-redux'
import { addToCart } from '../Cart/cartSlice'
import { addProduct, removeProduct, selectedProducts } from '../redux/ProductsSlice'
import { useAppDispatch } from '../redux/storeHooks'

const ProductsList: React.FC = () => {
  const products = useSelector(selectedProducts)

  const dispatch = useAppDispatch()

  const removeProductHandler = (id: string) => {
    dispatch(removeProduct(id))
  }

  return (
    <div>
      <h1>Games List</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <span>{`${product.title} : ${product.price}`}</span>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            <button onClick={() => removeProductHandler(product.id)}>Remove Product</button>
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
