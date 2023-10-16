import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.css'



const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#portada">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Colecciones</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  )
}

export default NavBar


