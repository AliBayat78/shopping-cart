import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik'
import { IFormik } from '../models/models'

const ProductForm = () => {
  const initialValues: IFormik = {
    title: '',
    price: 0,
    id: '',
  }

  return (
    <div>
      <h2>Add a Game</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => console.log(values, actions)}
      >
        <form>
          <input name="title" placeholder="title" />
          <input name="price" placeholder="price" />
          <input name="id" placeholder="id" />
        </form>
      </Formik>
    </div>
  )
}

export default ProductForm
