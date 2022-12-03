import ProjectForm from '../project/ProjectForm'; // Formulário dentro da pasta project

import styles from './Imoveis.module.css'; // CSS da página

function Imoveis() {
  return (
    <div className={styles.imoveis_container}>
      <h1>Imóveis</h1>
      <p>Aqui você pode consultar os imóveis cadastrados, incluir, editar e deletar os que já foram vendidos.</p>
      
      <ProjectForm btnText={"Cadastrar imóvel"} /> {/*Essa prop(btnText) irá mudar para de acordo com o método. Esse método será um POST. */}
    </div>
  );
}

export default Imoveis;
