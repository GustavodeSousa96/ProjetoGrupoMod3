import React from "react";
import styles from './Card.module.css';
import LinkButton from "./LinkButton";
import { FaSink } from "react-icons/fa";
import { BiBed } from "react-icons/bi";

function Card({titulo, localizacao, valor, Imagem, caminho, texto}) {
    return(
    
        <div className={styles.card}>
            
            <div className={styles.card_body}>
            <img src={Imagem} className={styles.img} style={{width:'100%'}} alt="imagem ilustrativa"/>
            
            <h3>{titulo}
            </h3>
            <p><strong>Estande de venda:</strong> {localizacao}</p>
            <p><strong>Valor:</strong> R$ {valor},00</p>
            <p> <FaSink/> 1 banheiro  </p>
            <p> <BiBed/> 2 quarto </p>
            <LinkButton to={caminho} text={texto} style={{margin:'bottom'}}/>
            </div>
        </div>

    
    )
}

export default Card;
