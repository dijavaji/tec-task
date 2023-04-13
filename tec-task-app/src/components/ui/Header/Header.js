import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Header= () => {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tasks"} className="nav-link">
                Todas
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Completas
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Incompletas
              </Link>
            </li>
          </div>
        </nav>
    </div>
  )
}

export default Header;
