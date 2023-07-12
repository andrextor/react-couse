import { getSayUrl } from '../services/facts'
import { useEffect, useState } from 'react'

const CAT_API_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firtsWork = fact.split(' ')[0]
    getSayUrl({ firtsWork }).then(url => setImageUrl(url))
  }, [fact])

  return { imageUrl: `${CAT_API_URL}${imageUrl}` }
}