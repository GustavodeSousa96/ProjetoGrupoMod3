import { Link } from 'react-router-dom';

import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png'; // Alterar a logo do Navbar aqui

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.menuToggle}>
          {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
          <input type="checkbox" />

          {/* <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    --> */}
          <span></span>
          <span></span>
          <span></span>

          {/* <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    --> */}
          <ul className={styles.menu}>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Imoveis</li>
            </a>
            <a href="#">
              <li>Clientes</li>
            </a>
            <a href="#">
              <li>Funcionários</li>
            </a>
          </ul>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            {' '}
            <Link exacted to="/">
              <img src={logo} alt="Rio Moveis logotipo" />
            </Link>
          </li>
          <li className={styles.item}>
            <Link exacted to="/">
              Home
            </Link>{' '}
          </li>{' '}
          {/* Serve como ancora */}
          <li className={styles.item}>
            <Link to="/imoveis">Imoveis</Link>
          </li>
          <li className={styles.item}>
            <Link to="/compradores">Clientes</Link>
          </li>
          <li className={styles.item}>
            <Link to="/vendedores">Funcionários</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
