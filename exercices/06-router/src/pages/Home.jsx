import { Link } from '../Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crar un React Router desde cero</p>
      <Link to='/about'> Ir a About</Link>
    </>
  )
}
