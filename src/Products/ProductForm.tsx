import { Formik } from 'formik'
import { Product } from '../models/models'
import { addProduct } from '../redux/ProductsSlice'
import { useAppDispatch } from '../redux/storeHooks'

const ProductForm = () => {
  const initialValues: Product = {
    title: '',
    price: 0,
    id: '',
  }

  const dispatch = useAppDispatch()

  return (
    <div>
      <h2>Add a Game</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          dispatch(addProduct(values))
        }}
      >
        {({ handleSubmit, values, handleChange }) => {
          return (
            <form onSubmit={handleSubmit}>
              <input
                value={values.title}
                onChange={handleChange}
                type="text"
                name="title"
                placeholder="title"
              />
              <input
                value={values.price}
                onChange={handleChange}
                type="number"
                name="price"
                placeholder="price"
              />
              <input
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
