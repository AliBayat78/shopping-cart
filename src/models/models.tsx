export interface Product {
  title: string
  price: number
  id: string
}

export enum ValidationState {
  Fulfilled,
  Pending,
  Rejected,
}

export interface ProductsSliceState {
  products: Product[]
  validationState?: ValidationState
  errorMessage?: string
}
