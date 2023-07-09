import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const users = [
    {
      userName: 'andrextor',
      name: 'Iván Andrés López Gómez',
      isFollowing: true
    },
    {
      userName: 'meiyerDev',
      name: 'Meiyer Jaimes ',
      isFollowing: false
    },
    {
      userName: 'unknow',
      name: 'Unkonw',
      isFollowing: true
    }
  ]
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) =>
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
       }
    </section>
  )
}
