import ProjectForm from '../project/ProjectForm'; // Formulário dentro da pasta project

import styles from './Imoveis.module.css'; // CSS da página

function Imoveis() {
  return (
    <div className={styles.imoveis_container}>
      <h1>Imóveis</h1>
      <p>Aqui você pode consultar os imóveis cadastrados, incluir, editar e deletar os que já foram vendidos.</p>
      <p>Formulário</p>
      <ProjectForm />
    </div>
  );
}

export default Imoveis;
