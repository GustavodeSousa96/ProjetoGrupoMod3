import {Link} from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png' // Alterar a logo do Navbar aqui

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
               <ul className={styles.list}>
                    <li  className={styles.item}> <Link exacted to='/'>
                    <img src={logo} alt='Rio Moveis logotipo' />
                    </Link></li>
                    <li className={styles.item}><Link exacted to='/'>Home</Link> </li> {/* Serve como ancora */}
                    <li className={styles.item}><Link to='/imoveis'>Imoveis</Link></li>
                    <li className={styles.item}><Link to='/compradores'>Clientes</Link></li>
                    <li className={styles.item}><Link to='/vendedores'>Funcionários</Link></li>

               </ul>

            </Container>
        </nav>
    )
}

export default Navbar 