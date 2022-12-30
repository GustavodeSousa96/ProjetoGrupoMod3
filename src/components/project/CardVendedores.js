import {Link} from "react-router-dom"
import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs' //Assim se puxam os ícones

function ProjectCard({id, nome, admissao, idade, cargo, handleRemove}){
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
       <div className={styles.project_card}>
         <h4>{nome}</h4>
         <p className={styles.category_text}><strong>Cargo:</strong> {cargo} </p>
         <p className={styles.category_text}><strong>Idade:</strong> {idade}</p>
         <p className={styles.category_text}><strong>Salário:</strong></p>
         <div className={styles.project_card_actions}>
            <Link to={`/putvendedores/${id}`}>
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