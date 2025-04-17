import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

//simulamos un array con usuarios que devuelve una api de una base de datos
const users = [
    {
        username: "alfremontes",
        name: "Freddy",
        initialIsFollowing: true,
    },
    {
        username: "LuquitaRodrigue",
        name: "Luis Luis",
        initialIsFollowing: true,
    },
    {
        username: "gbeder",
        name: "Gércules",
        initialIsFollowing: true,
    },
    {
        username: "joacavanna",
        name: "Pinche Panza Tacaño",
        initialIsFollowing: false,
    },
    {
        username: "robergalati",
        name: "3 bombas",
        initialIsFollowing: false,
    },
]

export function App () {
    return (
        <section className="App">
            {
                users.map(({username, name, initialIsFollowing}) => ( //.map recorre el array
                    <TwitterFollowCard
                        key={username} // key debe ser un dato único de cada objeto, en este caso usamos username, pero lo mejor siempre sería utilizar un id
                        username={username}
                        name={name}
                        initialIsFollowing={initialIsFollowing}
                    />
                ))
            }
        </section>
    )
}