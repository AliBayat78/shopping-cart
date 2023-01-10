import { Formik } from 'formik'
import { Product } from '../models/models'

const ProductForm = () => {
  const initialValues: Product = {
    title: '',
    price: 0,
    id: '',
  }

  return (
    <div>
      <h2>Add a Game</h2>
      <Formik initialValues={initialValues} onSubmit={(values) => alert(JSON.stringify(values))}>
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
