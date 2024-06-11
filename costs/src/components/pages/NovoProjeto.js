import styles from './NovoProjeto.module.css'
import Formulario from '../projects/Formulario'

function NovoProjeto(){
    return(
        <div className={styles.container_center}>
            <div className={styles.container}>
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
                <Formulario btnText="Criar Projeto"></Formulario>
            </div>
        </div>
    )
}

export default NovoProjeto