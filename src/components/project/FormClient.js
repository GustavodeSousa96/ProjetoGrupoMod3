import{useState, useEffect} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css'

function FormClient({handleSubmit, btnText, compradoresData}) {
  const [categories, setCategories] = useState([])
  const [compradores, setCompradores] = useState(compradoresData || {})

  const optionsForm = [
    {
      id: 1,
      value: 'apartamento',
      label: 'Apartamento'
    },
    {
      id: 2,
      value: 'casa',
      label: 'Casa'
    },
    {
      id: 3,
      value: 'terreno',
      label: 'Terreno'
    },
  ]

  useEffect(() => {
    fetch('http://localhost:5000/compradores', {
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
    handleSubmit(compradores)  // Quando duplicar alterar aqui p/ vendedores ou compradores
  }

  function handleChange(e) {
    setCompradores({...compradores, [e.target.name]: e.target.value}) // Quando duplicar alterar imovel p/ vendedores ou compradores
   
  }

  function handleCategory(e) {
    setCompradores({
      ...compradores, // Quando duplicar alterar imovel p/ vendedores ou compradores
      category: {
        id: e.target.value,
        tipo:e.target.options[e.target.selectedIndex].text,
      },
    })
    
  }

  return (
    <form onSubmit={submit} className={styles.form}> 
      <Input 
        type='text'
        text='Nome completo do(a) cliente'
        name='nome'
        placeholder='Insira o nome aqui'
        handleOnChange={handleChange}
        value={compradores.nome ? compradores.nome : ''}
      />
      <Input 
        type='number'
        text='Data de nascimento'
        name='nascimento' 
        placeholder='Insira a idade'
        handleOnChange={handleChange}
        value={compradores.nascimento ? compradores.nascimento : ''}
      /> {/*Tentar mudar idade para data de nascimento, utilizando máscara(dd/mm/aaaa) */}
      <Input 
        type='number'
        text='CPF'
        name='cpf'
        placeholder='Insira o CPF aqui'
        handleOnChange={handleChange}
        value={compradores.cpf ? compradores.cpf : ''}
      />
      <Input 
        type='number'
        text='RG'
        name='rg'
        placeholder='Insira o RG aqui'
        handleOnChange={handleChange}
        value={compradores.rg ? compradores.rg : ''}
      />
      <Select 
      name='category_id' 
      text='Selecione o tipo de imóvel '
      options={optionsForm}
      handleOnChange={handleCategory}
      value={compradores.category ? compradores.category.id : ''}
       />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default FormClient;
