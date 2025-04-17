import './App.css'
import { useState } from 'react'

export function TwitterFollowCard ({ username = "unknown", name = "unknown", initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    //const [buttonText, setButtonText] = useState("Seguir")
    const [hoveringFollowButton, setHovering] = useState(false)

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing)
    }
    const handleMouseEnter = () => {
        setHovering(true)
    }
    const handleMouseLeave = () => {
        setHovering(false)
    }
    const imageSrc = `https://unavatar.io/x/${username}`
    const formatUsername = (username) => `@${username}`
    const followButtonClass = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"
    const followButtonText = isFollowing ? hoveringFollowButton ? "Dejar de seguir" : "Siguiendo" : "Seguir"
    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" alt="Avatar del usuario" src={imageSrc} />
            <div className="tw-followCard-info">
                <strong className="tw-followCard-infoName">{name}</strong>
                <span className="tw-followCard-infoUsername">{formatUsername(username)}</span>
            </div>
        </header>
        <aside className="tw-followCard-aside">
            <button className={followButtonClass} onClick={handleFollowClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {followButtonText}
            </button>
        </aside>
        </article>
    )
}