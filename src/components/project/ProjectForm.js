import{useState, useEffect} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css'

function ProjectForm({handleSubmit, btnText, imovelData}) { // Talvez mudar projectData para imovelData
  const [categories, setCategories] = useState([])
  const [imovel, setImovel] = useState(imovelData || {})

  useEffect(() => {
    fetch('http://localhost:5000/imovel', {
    method:"GET",
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then((resp) => resp.json())
  .then((data)=>{
    setCategories(data)
  })
  .catch((err)=> console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(imovel)  // Quando duplicar alterar aqui p/ vendedores ou compradores
  }

  function handleChange(e) {
    setImovel({...imovel, [e.target.name]: e.target.value}) // Quando duplicar alterar imovel p/ vendedores ou compradores
   
  }

  function handleCategory(e) {
    setImovel({
      ...imovel, // Quando duplicar alterar imovel p/ vendedores ou compradores
      category: {
        id: e.target.value,
        tipo:e.target.options[e.target.selectedIndex].text,
      },
    })
    
  }

  return ( // incluído tbm o onSubmit (precisa duplicar nos outros forms)
    <form onSubmit={submit} className={styles.form}> 
      <Input 
        type='text'
        text='CEP'
        name='cep'
        placeholder='Insira o CEP do imóvel'
        handleOnChange={handleChange}
        value={imovel.cep ? imovel.cep : ''}
      />
      <Input 
        type='text'
        text='Logradouro'
        name='logradouro'
        placeholder='Insira o logradouro do imóvel'
        handleOnChange={handleChange}
        value={imovel.logradouro ? imovel.logradouro : ''}
      />
      <Input
        type='number'
        text='Número'
        name='numero'
        placeholder='Insira o numero do imóvel'
        handleOnChange={handleChange}
        value={imovel.numero ? imovel.numero : ''}
      />
      <Input
        type='text'
        text='Complemento'
        name='complemento'
        placeholder='Complemento'
        handleOnChange={handleChange}
        value={imovel.complemento ? imovel.complemento : ''}
      />
      <Input 
        type='text'
        text='Bairro'
        name='bairro'
        placeholder='Insira o bairro do imóvel'
        handleOnChange={handleChange}
        value={imovel.bairro ? imovel.bairro : ''}
      />
      <Input 
        type='text'
        text='Cidade'
        name='cidade'
        placeholder='Insira a cidade do imóvel'
        handleOnChange={handleChange}
        value={imovel.cidade ? imovel.cidade : ''}
      />
       <Input 
        type='text'
        text='Estado'
        name='estado'
        placeholder='Insira a estado do imóvel'
        handleOnChange={handleChange}
        value={imovel.estado ? imovel.estado : ''}
      />
      <Input
        type='number'
        text='Valor do imóvel'
        name='budget'
        placeholder='Insira o valor do imóvel'
        handleOnChange={handleChange}
        value={imovel.budget ? imovel.budget : ''}
      />
      <Select 
      name='category_id' 
      text='Selecione o tipo de imóvel '
      options={categories}
      handleOnChange={handleCategory}
      value={imovel.category ? imovel.category.id : ''}
       />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
