import{useState, useEffect} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css';

function FormVend({handleSubmit, btnText, vendedoresData}) {
  const [categories, setCategories] = useState([])
  const [vendedores, setVendedores] = useState(vendedoresData || {})

  const optionsForm = [
    {
      id: 1,
      value: 'vendedor',
      label: 'Vendedor'
    },
    {
      id: 2,
      value: 'gr',
      label: 'Gerente'
    },
    {
      id: 3,
      value: 'asg',
      label: 'Auxiliar de Serviçoes Gerais'
    },
    {
      id: 4,
      value: 'dp',
      label: 'Departamento Pessoal'
    },
  ]

  useEffect(() => {
    fetch('http://localhost:5000/vendedores', {
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
    handleSubmit(vendedores)  // Quando duplicar alterar aqui p/ vendedores ou compradores
  }

  function handleChange(e) {
    setVendedores({...vendedores, [e.target.name]: e.target.value}) // Quando duplicar alterar imovel p/ vendedores ou compradores
   
  }

  function handleCategory(e) {
    setVendedores({
      ...vendedores, // Quando duplicar alterar imovel p/ vendedores ou compradores
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
        text='Nome do funcionário(a)'
        name='nome'
        placeholder='Insira o nome aqui'
        handleOnChange={handleChange}
        value={vendedores.nome ? vendedores.nome : ''}
      />
      <Input 
        type='number'
        text='Idade'
        name='idade' 
        placeholder='Insira a idade'
        handleOnChange={handleChange}
        value={vendedores.idade ? vendedores.idade : ''}
      /> {/*Tentar mudar idade para data de nascimento, utilizando máscara(dd/mm/aaaa) */}
      <Input 
        type='number'
        text='CPF'
        name='cpf'
        placeholder='Insira o CPF aqui'
        handleOnChange={handleChange}
        value={vendedores.cpf ? vendedores.cpf : ''}
      />
      <Input 
        type='number'
        text='RG'
        name='rg'
        placeholder='Insira o RG aqui'
        handleOnChange={handleChange}
        value={vendedores.rg ? vendedores.rg : ''}
      />
      <Select 
      name='category_id' 
      text='Selecione o cargo '
      options={optionsForm}
      handleOnChange={handleCategory}
      value={vendedores.category ? vendedores.category.id : ''}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default FormVend;
