import { Link } from 'react-router-dom'


function WelcomePage() {
    return (
       <div>
             <Link to="/UserPerEvenement">
                <button className="my-button">2019</button>
            </Link>
       </div>

    )
}

export default WelcomePage;