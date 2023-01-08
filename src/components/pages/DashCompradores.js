import { useState, useEffect } from 'react';

import Loading from '../layout/Loading'
import styles from './DashImoveis.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton';
import CardCompradores from '../project/CardCompradores';
import Message from '../layout/Message';

function DashCompradores() {
  const [compradores, setCompradores] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectMessage] = useState('') //Mensagem de removido com 

  useEffect(() => {
    setTimeout(
      () => {
      fetch('http://localhost:5000/compradores', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      }).then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setCompradores(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
    }, 700)
  }, [])

  function removeProject (id) { //Metodo DELETE + msg de sucesso
    fetch(`http://localhost:5000/compradores/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(resp => resp.json())
    .then(() => {
      setCompradores(compradores.filter((compradores) => compradores.id !== id))
      setProjectMessage('Cliente removido com sucesso!')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className={styles.project_container}>
     <div className={styles.title_container}>
     <h1>DashBoard Clientes</h1>
     <LinkButton to="/compradores" text="Cadastrar novo cliente" />
     
     </div>
     {projectMessage && < Message type="success" msg={projectMessage} />}
     {!removeLoading && <Loading />}
          {removeLoading && compradores.length === 0 && (
            <p>Não há imóveis cadastrados.</p>
          )}
     <Container customClass='start'>
       {compradores.length > 0 && //Alterar as palavras imovel por vendedores e compradores
        compradores.map((project) =>// Aqui o nome project permanece, pois ele faz o link com o project.tipo
          <CardCompradores 
          id={project.id}
          nome={project.nome}
          idade={project.idade}
          interesse={project.tipo}
          cpf={project.cpf}
          handleRemove={removeProject}
          />)}
      </Container>
    </div>
  )
}

 

export default DashCompradores;
