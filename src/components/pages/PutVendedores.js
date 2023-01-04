import styles from './Imovel.module.css'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import FormVend from '../project/FormVend'

function PutVendedores () {
    const {id} = useParams()
    
    const [vendedores, setVendedores] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        fetch(`http://localhost:5000/vendedores/${id}`, {
      method:'GET',
      headers: {
        'Content-Type':'application/json',
      },
    
    })
    .then((resp) => resp.json())
    .then((data) => {
      setVendedores(data)
    })
    .catch(err => console.log)
    }, 300) // Inserir esse Timeout nos outros Puts
    }, [id])
    

    function editPost(vendedores) { // Alterar onde está escrito imóvel para vendedores ou compradores nas outras páginas
      fetch(`http://localhost:5000/vendedores/${vendedores.id}`, {
        method:'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(vendedores),
      })
      .then(resp => resp.json())
      .then((data) => {
        setVendedores(data)
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
        {vendedores.nome ? (
        <div className={styles.project_details}>
          <Container customClass='column'>
            <div className={styles.details_container}>
              <h1> Nome: {vendedores.nome}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar dados do clinte' : 'Fechar'}
                </button>
                {!showProjectForm ? (
                  <div className={styles.project_info}>
                     <p>
                      <span> Cargo: </span> {vendedores.tipo}
                    </p>
                    <p>
                      <span> Idade: </span> {vendedores.idade} anos
                    </p>
                    <p>
                      <span> Salario: </span> R$ {vendedores.salario},00
                    </p>
                  
                  </div>
                ) : (
                  <div className={styles.project_info}>
                    <FormVend 
                    handleSubmit={editPost} 
                    btnText='Concluir edição'
                    vendedoresData={vendedores}/>  {/* Alterar onde está escrito imovel e imovelData p/ vendedores ou compradores*/}
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

export default PutVendedores;