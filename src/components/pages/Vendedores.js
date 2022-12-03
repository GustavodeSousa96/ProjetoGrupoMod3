import FormVend from '../project/FormVend'; // Formulário dentro da pasta project

import styles from './Vendedores.module.css'; // CSS da página

function Vendedores() {
  return (
    <div className={styles.vendedores_container}>
      <h1>Funcionários</h1>
      <p>Aqui você pode consultar os dados dos funcionários, incluir, editar e deletar os que já não permanecem na empresa.</p>
     
      <FormVend btnText={"Cadastrar funcionário(a)"} /> {/*Essa prop(btnText) irá mudar para de acordo com o método. Esse método será um POST. */}
    </div>
  );

}

export default Vendedores;