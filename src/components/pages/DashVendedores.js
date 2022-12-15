import styles from './DashImoveis.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton';

function DashVendedores() {
  return (
    <div className={styles.project_container}>
     <div className={styles.title_container}>
     <h1>DashBoard funcionário(a) </h1>
     <LinkButton to="/vendedores" text="Cadastrar funcionário(a)" />
     
     </div>
      <Container customClass='start'>
        <p>Novos projetos</p>

      </Container>
    </div>
  )
}
 

export default DashVendedores;
