import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {
  return (
    <form className={styles.form}> 
      <Input 
        type='text'
        text='Nome do(a) cliente'
        name='name'
        placeholder='Insira o nome aqui'
      />
      <Input 
        type='number'
        text='Idade'
        name='name' 
        placeholder='Insira a idade'
      /> {/*Tentar mudar idade para data de nascimento, utilizando máscara(dd/mm/aaaa) */}
      <Select name='category_id' text='TESTE' />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
