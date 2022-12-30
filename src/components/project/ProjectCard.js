import {Link} from "react-router-dom"
import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs' //Assim se puxam os ícones

function ProjectCard({id, name, rgi, cidade, preco, estado, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
        
    }

    return(
       <div className={styles.project_card}>
         <h4>{name}</h4>
         <p className={styles.category_text}><strong>RGI:</strong> {rgi} </p>
         <p className={styles.category_text}><strong>Cidade:</strong> {cidade} <strong> UF:</strong> {estado}</p>
         <p className={styles.category_text}><strong>Preço:</strong> R${preco},00 </p>
         <div className={styles.project_card_actions}>
            <Link to={`/imovel/${id}`}>
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