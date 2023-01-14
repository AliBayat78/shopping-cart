import { Product } from '../models/models'

export const validateProduct = (product: Product): Promise<Product> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (product.title.length === 0) {
        reject('No Title')
      }
      if (product.price <= 0) {
        reject('Price is Incorrect')
      }
      resolve(product)
    }, 500),
  )
}
