import FormClient from '../project/FormClient'; // Formulário dentro da pasta project

import styles from './Compradores.module.css'; // CSS da página

function Clientes() {
  return (
    <div className={styles.compradores_container}>
      <h1>Clientes</h1>
      <p>Aqui você pode consultar os dados dos clientes, incluir, editar e deletar.</p>
    
      <FormClient btnText={"Cadastrar cliente"} /> {/*Essa prop(btnText) irá mudar para de acordo com o método. Esse método será um POST. */}
    </div>
  );

}

export default Clientes;
