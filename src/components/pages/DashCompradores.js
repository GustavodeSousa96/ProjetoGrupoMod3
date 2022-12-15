import { useState, useEffect } from 'react';
import styles from './DashImoveis.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton';
import CardCompradores from '../project/CardCompradores';

function DashCompradores() {
  const [compradores, setCompradores] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/compradores', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
     },
    }).then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      setCompradores(data)
    })
    .catch((err) => console.log(err))
  }, [])
  return (
    <div className={styles.project_container}>
     <div className={styles.title_container}>
     <h1>DashBoard Clientes</h1>
     <LinkButton to="/compradores" text="Cadastrar novo cliente" />
     
     </div>
     <Container customClass='start'>
       {compradores.length > 0 && //Alterar as palavras imovel por vendedores e compradores
        compradores.map((project) =>// Aqui o nome project permanece, pois ele faz o link com o project.tipo
          <CardCompradores 
          id={project.id}
          nome={project.nome}
          idade={project.idade}
          interesse={project.tipo}
          />)}

      </Container>
    </div>
  )
}

 

export default DashCompradores;
