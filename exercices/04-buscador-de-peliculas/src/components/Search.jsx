import { UseMovies } from '../hooks/UseMovies'
import { useSearch } from '../hooks/UseSearch'
import { Movies } from './Movies'

export function Search () {
  const { movies } = UseMovies()
  const { search, updateSearch, error } = useSearch()

  console.log('render')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)
  }

  return (
    <div className='page'>
      <h1>Buscador de peliculas</h1>
      <header>
        <form className='form' onSubmit={handleSubmit} action=''>
          <input onChange={handleChange} value={search} name='search' type='text' placeholder='Spiderman, John wick 4, Misión imposible...' />
          <button type='submit'>Buscar </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
