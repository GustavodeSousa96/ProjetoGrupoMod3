import { useState, useEffect } from 'react';
import CardVendedores from '../project/CardVendedores';
import styles from './DashImoveis.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton';

function DashVendedores() {

  const [vendedores, setVendedores] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/vendedores', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
     },
    }).then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      setVendedores(data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.project_container}>
     <div className={styles.title_container}>
     <h1>DashBoard funcionário(a) </h1>
     <LinkButton to="/vendedores" text="Cadastrar funcionário(a)" />
     
     </div>
     <Container customClass='start'>
       {vendedores.length > 0 && //Alterar as palavras imovel por vendedores e compradores
        vendedores.map((project) =>// Aqui o nome project permanece, pois ele faz o link com o project.tipo
          <CardVendedores
          id={project.id}
          nome={project.nome}
          cargo={project.tipo} 
          idade={project.idade}
          />)}

      </Container>
    </div>
  )
}
 

export default DashVendedores;
