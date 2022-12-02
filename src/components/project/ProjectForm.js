function ProjectForm(){
    return(
        <form>
            <div><input type='text' placeholder='Insira o endereço do imóvel' /></div>
            <div><input type='number' placeholder='Insira o valor do imóvel' /></div>
            <div>
                <select name="category_id" >
                    <option disabled>Selecione o tipo de imóvel</option>
                </select>
            </div>
            <div>
                <input type='submit' value='Criar produto' />
            </div>
        </form>
    )
}

export default ProjectForm