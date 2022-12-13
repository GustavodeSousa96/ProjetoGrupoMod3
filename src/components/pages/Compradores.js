import {useNavigate} from 'react-router-dom'//useHistory foi substituído por useNavigate

import FormClient from '../project/FormClient'; // Formulário dentro da pasta project

import styles from './Compradores.module.css'; // CSS da página

function Clientes() {

  const navigate = useNavigate() //useHistory foi substituído por useNavigate()

  function createPost(project){ // Talvez mudar project para imovel

    //initialize cost and services - Por enquanto os dados abaixo ñ estao sendo utilizados
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/compradores', {
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(project), // Talvez mudar project para imovel
    })
      .then((resp) => resp.json())
      .then((data) => {
      console.log(data)
      //redirect
      navigate('/dashcompradores', {message:'Imovel cadastrado com sucesso!'})
    })
    .catch((err) => console.log(err))

  }

  return (
    <div className={styles.compradores_container}>
      <h1>Clientes</h1>
      <p>Aqui você pode consultar os dados dos clientes, incluir, editar e deletar.</p>
    
      <FormClient handleSubmit={createPost} btnText={"Cadastrar cliente"} /> {/*Essa prop(btnText) irá mudar para de acordo com o método. Esse método será um POST. */}
    </div>
  );

}

export default Clientes;
