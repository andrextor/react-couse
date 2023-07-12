const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await response.json()
    const { fact } = data
    return fact
  }

  export const getSayUrl = async ({firtsWork}) => {
    const resoponse = await fetch(`https://cataas.com/cat/says/${firtsWork}?json=true`)
    const data = await resoponse.json()
    const { url } = data
    return url
  }