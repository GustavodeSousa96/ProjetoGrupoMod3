// importação do CSS
import styles from './Home.module.css'

//importação da imagem
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'


function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Rio Móveis</span></h1>
            <p>Gerenciar imóveis cadastrados</p>
            <LinkButton to='/imoveis' text="Cadastrar imóveis" />
            <img src={savings} alt='Rio Moveis' />
        </section>
        
    )
}

export default Home