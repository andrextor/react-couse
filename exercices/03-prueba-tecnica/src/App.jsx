import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_API_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const firtsWork = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firtsWork}?json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1> App gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_API_URL}${imageUrl}`} alt={`Image extracted usionf the first word for ${fact}`} />}
    </main>
  )
}
