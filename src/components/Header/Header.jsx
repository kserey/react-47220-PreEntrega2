import Container from 'react-bootstrap/Container';

import './Header.css'
import NavBar from '../NavBar/NavBar';

import logoImg from '../../assets/img/SIMBOLO_REDONDO.png';
import bolsaImg from '../../assets/img/bolsa.png'
import CartWidget from '../CartWidget/CartWidget';

function Header() {
  return (
    <header id="header" className="fixed-top">

      <div className="container d-flex align-items-center justify-content-between">
        <a href="index.html">
          <img src={logoImg} alt="logo Selva de Papel" className="logo-img" />
        </a>
        <NavBar />
        <CartWidget />
      </div>

    </header>
  );
}

export default Header;