import { Link } from 'react-router-dom'


function UserPerEvenement() {
    return (
        <div>
            <h1> User info for each evenement </h1>
            <ul>
                <li>
                    <Link to="/planning">Mon planning</Link>
                </li>
                <li>
                    <Link to="/Zones">Zones</Link>
                </li>
            </ul>

            <div className='news'>
                <p>
                    une zone "news"  avec des infos types 
                    XXX bénévoles inscrits
                    xxxx éditeurs présentront leur jeux
                    yyyy jeux prévus
                    zzzz jeux reçus
                    </p>
            </div>
            <div className='infos_referents'>
                <p>
                l'info des coordonnées des référents des postes choisis
                </p>
            </div>
            <div className='soiree_decouvertes'>
                liste des prochaines soirées découvertes
            </div>
            
        </div>
        
    )
}

export default UserPerEvenement;