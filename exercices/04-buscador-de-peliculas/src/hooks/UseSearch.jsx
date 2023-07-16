import { useEffect, useState, useRef } from 'react'

export const useSearch = () => {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      return setError(null)
    }

    if (search.match(/^\d+$/)) {
      return setError('No se puede buscar una pelicula con un número')
    }

    if (search.length < 3) {
      return setError('ingresa una titulo valido')
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
