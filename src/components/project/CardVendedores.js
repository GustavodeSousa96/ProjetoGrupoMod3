import {Link} from "react-router-dom"
import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs' //Assim se puxam os ícones

function ProjectCard({id, nome, admissao, idade, cargo, handleRemove}){
    return(
       <div className={styles.project_card}>
         <h4>{nome}</h4>
         <p className={styles.category_text}><strong>Cargo:</strong> {cargo} </p>
         <p className={styles.category_text}><strong>Idade:</strong> {idade}</p>
         <p className={styles.category_text}><strong>Preço:</strong></p>
         <div className={styles.project_card_actions}>
            <Link to="/">
                <BsPencil /> Editar
            </Link>
            <button>
                <BsFillTrashFill /> Excluir
            </button>
         </div>
       </div>
        
    )
}

export default ProjectCard;