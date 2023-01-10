// importação do React
import { useState, useEffect } from 'react';


// importação do Components
import Loading from '../../components/layout/Loading';

// importação do CSS
import styles from './Home.module.css';

//importação da imagem
import Rio from '../../img/costs_logo.png';
import LinkButton from '../layout/LinkButton';

//importação do card
import Card from '../layout/Card';
import Sobrado from '../../img/imoveis/casa_1_1.jpg';
import Sobrado1 from '../../img/imoveis/casa_2.jpg';
import Sobrado2 from '../../img/imoveis/casa_3.jpg'; 

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <div className={styles.home_container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className={styles.h1}>
            <span className={styles.span}>Bem-vindo ao Rio Imóveis</span>
          </h1>
          <div className={styles.grid}>
            <div className={styles.conteudo}> 
          <p className={styles.texto} style={{color:'white'}}> <img src={Rio} alt='Rio Imoveis'/>
          &nbsp; &nbsp;A Rio Imóveis é uma empresa voltada para comercialização e locação de imóveis, também focada em diversos negócios do mercado imobiliário. Nos especializamos na locação de imóveis mobiliados, aluguel ou por temporada e venda, em diversos bairros do Rio de janeiro.
          <br/>
          <br/>
          &nbsp; &nbsp; Criada em 2012 por João da Silva à Rio Imóveis se tornou referência no campo imobiliário como sinônimo de honestidade, confiança e qualidade em consultoria e intermediação imobiliária. 
          <br/>
          <br/>
          Temos como filosofia a transparência e parceria, assim priorizamos um atendimento individualizado e exclusivo buscando suprir as necessidades particulares de cada um envolvido no processo.
          <br/>
          <br/>
          &nbsp; &nbsp; Nossa equipe de profissionais está habilitada a prestar a melhor assessoria no que for necessário para auxilia-lo nesse momento.
            </p>
            </div>
          </div>
          <p className='title-cards'>Gerenciar imóveis cadastrados</p>
            <div className={styles.linha}>
              <Card Imagem={Sobrado} titulo='Sobrado Para Alugar' localizacao='Rua Prudente de Morais - Ipanema, Rio de Janeiro, RJ' valor='1100' caminho="/dashimoveis" texto="Alugue"/>
              <Card Imagem={Sobrado1} titulo='Sobrado Para Venda' localizacao='Rua Joaquim Nabuco - Ipanema, Rio de Janeiro, RJ' valor='1599' caminho="/dashimoveis" texto="Compre"/>
              <Card Imagem={Sobrado2} titulo='Sobrado Para Venda' localizacao='Avenida Rainha Elizabeth da Bélgica - Ipanema, Rio de Janeiro, RJ' valor='1288' caminho="/dashimoveis" texto="Compre"/>
            </div>
            <br/>
            <br/>
            <LinkButton to="/imoveis" text="Cadastrar imóveis" />
        </>
      )}
    </div>
  );
}

export default Home;
