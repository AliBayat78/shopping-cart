import { useAppDispatch, useAppSelector } from '../redux/storeHooks'
import { removeFromCart, selectedCarts, totalPrice } from './cartSlice'

const Cart: React.FC = () => {
  const cartProducts = useAppSelector(selectedCarts)
  const totalCartPrice = useAppSelector(totalPrice)
  const dispatch = useAppDispatch()

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id))
  }

  return (
    <>
      <h3>Cart</h3>
      <h5>{totalCartPrice}</h5>
      {cartProducts.map((cart) => {
        return (
          <div key={cart.id}>
            <span>{cart.title}</span>
            <span>{cart.amount}</span>
            <button onClick={() => handleRemoveFromCart(cart.id)}>Remove From Cart</button>
          </div>
        )
      })}
    </>
  )
}

export default Cart
