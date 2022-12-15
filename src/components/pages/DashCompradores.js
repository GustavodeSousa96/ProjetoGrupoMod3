import styles from './DashImoveis.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton';

function DashCompradores() {
  return (
    <div className={styles.project_container}>
     <div className={styles.title_container}>
     <h1>DashBoard Clientes</h1>
     <LinkButton to="/compradores" text="Cadastrar novo cliente" />
     
     </div>
      <Container customClass='start'>
        <p>Novos projetos</p>

      </Container>
    </div>
  )
}

 

export default DashCompradores;
