import{useState, useEffect} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css';

function FormVend({btnText}) {
  const [categories, setCategories] = useState([])

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
  
  return (
    <form className={styles.form}> 
      <Input 
        type='text'
        text='Nome do funcionário(a)'
        name='name'
        placeholder='Insira o nome aqui'
      />
      <Input 
        type='number'
        text='Idade'
        name='name' 
        placeholder='Insira a idade'
      /> {/*Tentar mudar idade para data de nascimento, utilizando máscara(dd/mm/aaaa) */}
      <Select 
      name='category_id' 
      text='Selecione o cargo '
      options={categories} />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default FormVend;
