import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import { Product } from '../models/models'
import { addProduct, addProductAsync, getErrorMessage } from '../redux/ProductsSlice'
import { useAppDispatch } from '../redux/storeHooks'

const ProductForm = () => {
  const initialValues: Product = {
    title: '',
    price: 0,
    id: '',
  }

  const dispatch = useAppDispatch()
  const errorMessage = useSelector(getErrorMessage)

  return (
    <div>
      <h2>Add a Game</h2>
      {errorMessage ? <span>error: {errorMessage}</span> : null}
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          dispatch(addProductAsync(values))
        }}
      >
        {({ handleSubmit, values, handleChange }) => {
          return (
            <form onSubmit={handleSubmit}>
              <input
                style={{ border: errorMessage ? '1px solid red' : '1px solid black' }}
                value={values.title}
                onChange={handleChange}
                type="text"
                name="title"
                placeholder="title"
              />
              <input
                style={{ border: errorMessage ? '1px solid red' : '1px solid black' }}
                value={values.price}
                onChange={handleChange}
                type="number"
                name="price"
                placeholder="price"
              />
              <input
                style={{ border: errorMessage ? '1px solid red' : '1px solid black' }}
                value={values.id}
                onChange={handleChange}
                type="text"
                name="id"
                placeholder="id"
              />
              <button type="submit">add</button>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}

export default ProductForm
