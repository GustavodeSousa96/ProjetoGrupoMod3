import {Link} from "react-router-dom"
import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs' //Assim se puxam os ícones

function ProjectCard({id, nome, idade, interesse, cpf, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
       <div className={styles.project_card}>
         <h4>{nome}</h4>
         <p className={styles.category_text}><strong>CPF:</strong> {cpf}</p>
         <p className={styles.category_text}><strong>Idade:</strong> {idade} anos</p>
         <p className={styles.category_text}><strong>Imovel de interesse:</strong> {interesse} </p>
         <div className={styles.project_card_actions}>
            <Link to={`/putcompradores/${id}`}>
                <BsPencil /> Editar
            </Link>
            <button onClick={remove}>
                <BsFillTrashFill /> Excluir
            </button>
         </div>
       </div>
        
    )
}

export default ProjectCard;