import { Link } from "react-router-dom";


function LoginPage() {
 
  return (
          <form>
            <h1 className="login-title">Login</h1>
            <input
              type="email"
        placeholder="Email"
      />
      <input
        type="password"
        placeholder="Mot de passe"
      />
      <button className="my-button" type="submit">
        Connexion
      </button>
      <Link to="/register">
        <button className="my-button">Pas de compte ?</button>
      </Link>
    </form>
  );
}

export default LoginPage;