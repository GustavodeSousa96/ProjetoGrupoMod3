import styles from './SubmitButton.module.css'

function SubmitButton({text}) { /* Esse componente pode ser usado em todos os métodos(GET,PUT,POST e DEL*/
    return ( // Os campos do input abaixo estão de forma dinâmica, e serão alterados de acordo com a página que estiverem.
        <div > 
            <button className={styles.btn}>{text}</button>
        </div> 
    )
}

export default SubmitButton;