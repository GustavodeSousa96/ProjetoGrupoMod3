//Ícones sendo exportados do react icons(procurar)
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          {' '}
          <FaFacebook />{' '}
        </li>
        <li>
          {' '}
          <FaInstagram />{' '}
        </li>
        <li>
          {' '}
          <FaYoutube />{' '}
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Rio Móveis</span> &copy;2022
      </p>
    </footer>
  );
}

export default Footer;
