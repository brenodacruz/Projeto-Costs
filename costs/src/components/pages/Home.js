import { Link } from "react-router-dom"
import savings from '../../img/savings.svg'
import styles from './Home.module.css'


function Home(){
    return(
        <div className={styles.main}>
            <h1>Bem-vindo ao <span className={styles.costs}>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <Link to="/novoprojeto">Criar Projeto</Link>
            <img src={savings} alt="Cofre" className={styles.img}></img>
        </div>
    )
}

export default Home