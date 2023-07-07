import { useState } from "react";
export function TwitterFollowCard({children, userName = 'unknow', initialIsFollowing}) {

    const [isFollowing , setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo...' : 'Seguir';
    const buttonClassName = isFollowing
     ? 'tw-followCard-button is-following'
     : 'tw-followCard-button'

     const handleClick = () => {
        setIsFollowing(!isFollowing)
     }

    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
                className="tw-followCard-avatar" 
                alt="avatar" 
                src={`https://unavatar.io/${userName}`}
             />
            <div className="tw-followCard-info">
                <strong className="tw-followCard-info-username">{children}</strong>
                <span className="tw-followCard-info-username">@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick} >
                {text}
            </button>
        </aside>
    </article>
    )
}