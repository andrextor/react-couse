import successSearch from '../mocks/success_search_avenger.json'
// import notFoundSearch from '../mocks/not_foun.json'

export function UseMovies () {
  const movies = successSearch.Search

  const mapperMovies = movies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    type: movie.Type,
    year: movie.Year,
    image: movie.Poster
  }))

  return { movies: mapperMovies }
}
