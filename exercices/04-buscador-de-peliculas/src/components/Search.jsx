import { useCallback, useState } from 'react'
import { UseMovies } from '../hooks/UseMovies'
import { useSearch } from '../hooks/UseSearch'
import { Movies } from './Movies'
import debounce from 'just-debounce-it'

export function Search () {
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = UseMovies({ search, sort })
  const debounceGetMovie = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500)
    , [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovie(newSearch)
  }

  const handlerSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <h1>Buscador de peliculas</h1>
      <header>
        <form className='form' onSubmit={handleSubmit} action=''>
          <input onChange={handleChange} value={search} name='search' type='text' placeholder='Spiderman, John wick 4, Misión imposible...' />
          <input type='checkbox' onChange={handlerSort} checked={sort} />
          <button type='submit'>Buscar </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main> {loading ? <p>Cargando...</p> : <Movies movies={movies} />}  </main>
    </div>
  )
}
