import './App.css'
import ProductForm from './Products/ProductForm'
import ProductsList from './Products/ProductsList'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductsList />
        <ProductForm />
      </div>
    </Provider>
  )
}

export default App
