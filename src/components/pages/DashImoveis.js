//ATENÇÃO: Mesmo seguindo o passo a passo, a mensagem não aparece na tela ao incluir um novo imóvel

import { useLocation } from 'react-router-dom';

import Message from '../layout/Message';

import styles from './DashImoveis.module.css'

import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';


function DashImoveis() {

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  return (
    <div className={styles.project_container}>
     <div className={styles.title_container}>
     <h1>DashBoard imoveis</h1>
     <LinkButton to="/imoveis" text="Cadastrar imóveis" />
     
     </div>
      {message && < Message type="success" msg={message} />}
      <Container customClass='start'>
        <p>Novos projetos</p>

      </Container>
    </div>
  )
}

 

export default DashImoveis;
