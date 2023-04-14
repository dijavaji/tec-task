import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Header= () => {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <div className="navbar-header">
              <Link to={"/"}  className="navbar-brand">Technoloqie</Link>
            </div>
            <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to={"/tasks"} className="nav-link">
                Favoritos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Busqueda
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Alertas
              </Link>
            </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Header;
