import styles from './Imovel.module.css'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'

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
                    <p>Detalhes do Cliente</p>
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