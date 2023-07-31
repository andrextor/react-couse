import './App.css'
import { lazy, Suspense } from 'react'
import { Router } from './Router'
import { SearchPage } from './pages/SearchPage'
import { Route } from './Route'

const LazyAboutPage = lazy(() => import('./pages/About'))
const LazyHomePage = lazy(() => import('./pages/Home'))
const LazyPage404 = lazy(() => import('./pages/404'))

const AppRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={AppRoutes} defaultComponent={LazyPage404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
