import styles from './Imovel.module.css'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'

function Imovel () {
    const {id} = useParams()
    
    const [imovel, setImovel] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
          fetch(`http://localhost:5000/imovel/${id}`, {
            method:'GET',
            headers: {
            'Content-Type':'application/json',
      },
    
    })
    .then((resp) => resp.json())
    .then((data) => {
        setImovel(data)
    })
    .catch(err => console.log)
    }, 300) // Inserir esse Timeout nos outros Puts
    }, [id])

    function toggleProjectForm() {
      setShowProjectForm(!showProjectForm)
    }
    
    return (
        <>
        {imovel.rgi ? (
        <div className={styles.project_details}>
          <Container customClass='column'>
            <div className={styles.details_container}>
              <h1> RGI: {imovel.rgi}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar imóvel' : 'Fechar'}
                </button>
                {!showProjectForm ? (
                  <div className={styles.project_info}>
                    <p>
                      <span> Tipo de imóvel: </span> {imovel.tipo}
                    </p>
                    <p>
                      <span> Valor do imóvel: </span> R$ {imovel.budget},00
                    </p>
                    <p>
                      <span> Bairro: </span> {imovel.bairro}
                    </p>
                  </div>
                ) : (
                  <div className={styles.project_info}>
                    <p>Detalhes do projeto</p>
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

export default Imovel