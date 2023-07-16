import { useCatImage } from './hooks/useCarImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => { refreshFact() }

  return (
    <main>
      <h1> App gatitos</h1>
      <button onClick={handleClick}>Get new  fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted usionf the first word for ${fact}`} />}
    </main>
  )
}
