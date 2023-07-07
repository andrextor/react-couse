import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

    return(
    <section className='App'>
        <TwitterFollowCard initialIsFollowing  userName="Andrextor" >
            Iván Andrés López Gómez
        </TwitterFollowCard>
        <TwitterFollowCard userName="meiyerDev" >
            Meiyer Jaimes 
        </TwitterFollowCard>
        <TwitterFollowCard initialIsFollowing>
            Unknow
        </TwitterFollowCard>
    </section>
    )
}