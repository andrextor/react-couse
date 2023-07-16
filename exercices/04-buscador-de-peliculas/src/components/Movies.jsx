function ListMovies ({ movies }) {
  return (
    <ul>
      {
            movies.map(movie => (
              <li key={movie.id}>
                <h3> {movie.title} </h3>
                <p>Tipo: {movie.type}</p>
                <p>Año: {movie.year}</p>
                <img src={movie.image} alt={movie.title} />
              </li>
            ))
          }
    </ul>
  )
}

function NotFoundMovies () {
  return (
    <p>No se encontraron peliculas para tu búsquedad</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies ? <ListMovies movies={movies} /> : <NotFoundMovies />
  )
}
