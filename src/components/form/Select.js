import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}){ /* Essas props serão utilizadas na identificação dos Inputs do formulário*/

    const optionFilter = options.filter((option) => option.tipo !== "")

    console.log('teste', optionFilter)

    return ( // Os campos do input abaixo estão de forma dinâmica, e serão alterados de acordo com a página que estiverem.
        <div className={styles.form_control}> 
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value} className={styles.dropdown_content}>
                <option>Selecione uma opção</option>
                {options
                .filter(option => option.tipo !== "")
                .map((option)=> (
                    <option value={option.value} key={option.id}> {option.label}</option>
                ))}
            </select>
        </div> 
    )
}

export default Select;