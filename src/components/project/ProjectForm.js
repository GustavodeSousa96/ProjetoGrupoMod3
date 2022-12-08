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
    handleSubmit(imovel)  // Talvez mudar project para imovel
  }

  function handleChange(e) {
    setImovel({...imovel, [e.target.name]: e.target.value})
   
  }

  function handleCategory(e) {
    setImovel({
      ...imovel,
      category: {
        id: e.target.value,
        name:e.target.options[e.target.selectedIndex].text,
      },
    })
    
  }

  return ( // incluído tbm o onSubmit (precisa duplicar nos outros forms)
    <form onSubmit={submit} className={styles.form}> 
      <Input 
        type='text'
        text='Endereço do imóvel'
        name='name'
        placeholder='Insira o endereço do imóvel'
        handleOnChange={handleChange}
        value={imovel.name ? imovel.name : ''}
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
