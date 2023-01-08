import { Link } from "react-router-dom"
import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs' //Assim se puxam os ícones
import { IoMdPhotos } from 'react-icons/io';

function ProjectCard({id, name, rgi, cidade, preco, estado, handleRemove}){
    const remove = (e) => {
      e.preventDefault()
      handleRemove(id)
    }

    return (
        <div className={styles.project_card}>
         <h4>{name}</h4>
         <p className={styles.category_text}><strong>RGI: &nbsp;</strong> {rgi} </p>
         <p className={styles.category_text}><strong>Cidade: &nbsp;</strong> {cidade} <strong> &nbsp;UF:&nbsp;</strong> {estado}</p>
         <p className={styles.category_text}><strong>Preço: &nbsp;</strong> R${preco},00 </p>
         <div className={styles.project_card_actions}>
            <Link to={`/imovel/${id}`}>
                <BsPencil /> Editar
            </Link>
            <button>
                <IoMdPhotos /> Ver
            </button>
            <button onClick={remove}>
                <BsFillTrashFill /> Excluir
            </button>
            
         </div>
       </div>
    )
}

export default ProjectCard;