import { Link } from '../Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a Home',
    description: 'Hola soy Iván Andrés y estoy haciendo un clone de React router'
  },
  en: {
    title: 'About us',
    button: 'Go to Home',
    description: 'Hi my name is Iván Andrés i am creating a clone of React Router'
  }
}

const useI18N = (lang) => {
  return i18n[lang] || i18n.es
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18N(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src='https://avatars.githubusercontent.com/u/26684203?s=400&u=064a212d3ce4c5994a167ff0ce7016ac45a72943&v=4' alt='Foto de Andres' />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
