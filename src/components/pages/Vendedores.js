import {useNavigate} from 'react-router-dom'//useHistory foi substituído por useNavigate

import FormVend from '../project/FormVend'; // Formulário dentro da pasta project

import styles from './Vendedores.module.css'; // CSS da página

function Vendedores() {

  const navigate = useNavigate() //useHistory foi substituído por useNavigate()

  function createPost(project){ // Talvez mudar project para imovel

    //initialize cost and services - Por enquanto os dados abaixo ñ estao sendo utilizados
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/vendedores', {
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
      navigate('/dashvendedores', {message:'Imovel cadastrado com sucesso!'})
    })
    .catch((err) => console.log(err))

  }

  return (
    <div className={styles.vendedores_container}>
      <h1>Funcionários</h1>
      <p>Aqui você pode consultar os dados dos funcionários, incluir, editar e deletar os que já não permanecem na empresa.</p>
     
      <FormVend handleSubmit={createPost} btnText={"Cadastrar funcionário(a)"} /> {/*Essa prop(btnText) irá mudar para de acordo com o método. Esse método será um POST. */}
    </div>
  );

}

export default Vendedores;