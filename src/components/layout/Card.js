import React from "react";
import styles from './Card.module.css';

function Card({titulo, conteudo, Imagem}) {
    return(
    
        <div className={styles.card}>
            
            <div className={styles.card_body}>
            <img src={Imagem} alt="imagem ilustrativa"/>
            
            <h3>{titulo}
            </h3>

            <p>{conteudo}</p>
            </div>
        </div>

    
    )
}

export default Card;