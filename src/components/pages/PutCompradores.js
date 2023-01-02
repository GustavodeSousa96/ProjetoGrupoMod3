import styles from './Imovel.module.css'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import FormClient from '../project/FormClient'

function PutCompradores () {
    const {id} = useParams()
    
    const [compradores, setCompradores] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
      setTimeout(() => {
      fetch(`http://localhost:5000/compradores/${id}`, {
      method:'GET',
      headers: {
        'Content-Type':'application/json',
      },
    
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCompradores(data)
    })
    .catch(err => console.log)
  }, 300) // Inserir esse Timeout nos outros Puts
    }, [id])
    

    function editPost(compradores) { // Alterar onde está escrito imóvel para vendedores ou compradores nas outras páginas
      fetch(`http://localhost:5000/compradores/${compradores.id}`, {
        method:'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(compradores),
      })
      .then(resp => resp.json())
      .then((data) => {
        setCompradores(data)
        setShowProjectForm(false)
        //mensagem
      })
      .catch(err => console.log(err))
    }

    function toggleProjectForm() {
      setShowProjectForm(!showProjectForm)
    }

    return (
       
        <>
        {compradores.nome ? (
        <div className={styles.project_details}>
          <Container customClass='column'>
            <div className={styles.details_container}>
              <h1> Nome: {compradores.nome}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar dados do clinte' : 'Fechar'}
                </button>
                {!showProjectForm ? (
                  <div className={styles.project_info}>
                     <p>
                      <span> CPF: </span> {compradores.cpf}
                    </p>
                    <p>
                      <span> Idade: </span> {compradores.idade} anos
                    </p>
                    <p>
                      <span> Valor disponível de ntrada: </span> R$ {compradores.entrada},00
                    </p>
                  
                  </div>
                ) : (
                  <div className={styles.project_info}>
                     <FormClient 
                    handleSubmit={editPost} 
                    btnText='Concluir edição'
                    compradoresData={compradores}/>  {/* Alterar onde está escrito imovel e imovelData p/ vendedores ou compradores*/}
                  </div>
                )}
            </div>
          </Container>
        </div>
        ) : (
        <Loading />
        )}
        </>
    )
}

export default PutCompradores;