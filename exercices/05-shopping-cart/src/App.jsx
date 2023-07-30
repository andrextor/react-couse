import { useState } from 'react'
import { Cart } from './components/Cart'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { IS_DEVELOPMENT } from './config'
import { CartProvider } from './context/cart'
import { useFilters } from './hooks/useFilters'

import { products as InitialProducts } from './mocks/products.json'

function App () {
  const [products] = useState(InitialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
