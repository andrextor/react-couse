import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'

import { products as InitialProducts } from './mocks/products.json'

function App () {
  const [products] = useState(InitialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
