import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}){ /* Essas props serão utilizadas na identificação dos Inputs do formulário*/
    return ( // Os campos do input abaixo estão de forma dinâmica, e serão alterados de acordo com a página que estiverem.
        <div className={styles.form_control}> 
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div> 
    )
}

export default Select;