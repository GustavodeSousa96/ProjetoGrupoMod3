//ATENÇÃO: Mesmo seguindo o passo a passo, a mensagem não aparece na tela ao incluir um novo imóvel

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Message from '../layout/Message';

import styles from './DashImoveis.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';


function DashImoveis() {
  const [imovel, setImovel] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false) // Declaração do Loading
  const [projectMessage, setProjectMessage] = useState('') //Mensagem de removido com sucesso

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => { 
   setTimeout( // Dentro do timeOut está o método de GET e o Loading
    () => {
      fetch('http://localhost:5000/imovel', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
         },
        }).then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          setImovel(data)
          setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, 700) // Aqui declaro que o loading ficará visivel por 700ms
  }, [])

  function removeProject (id) { //Metodo DELETE + msg de sucesso
    fetch(`http://localhost:5000/imovel/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(resp => resp.json())
    .then(() => {
      setImovel(imovel.filter((imovel) => imovel.id !== id))
      setProjectMessage('Imóvel removido com sucesso!')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className={styles.project_container}>
     <div className={styles.title_container}>
     <h1>DashBoard imoveis</h1>
     <LinkButton to="/imoveis" text="Cadastrar imóveis" />
     
     </div>
      {message && < Message type="success" msg={message} />}
      {projectMessage && < Message type="success" msg={projectMessage} />}
      {!removeLoading && <Loading />}
          {removeLoading && imovel.length === 0 && (
            <p>Não há imóveis cadastrados.</p>
          )}
      <Container customClass='start'>
       {imovel.length > 0 && //Alterar as palavras imovel por vendedores e compradores
        imovel.map((project) =>// Aqui o nome project permanece, pois ele faz o link com o project.tipo
          <ProjectCard 
          id={project.id}
          name={project.tipo}
          rgi={project.rgi} 
          estado={project.estado}
          cidade={project.cidade}
          preco={project.budget}
          handleRemove={removeProject}
          />)}
      </Container>
    </div>
  )
}

 

export default DashImoveis;
