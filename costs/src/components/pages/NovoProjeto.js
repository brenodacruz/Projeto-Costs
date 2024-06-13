import { useNavigate } from 'react-router-dom'


import styles from './NovoProjeto.module.css'
import Formulario from '../projects/Formulario'

function NovoProjeto(){

    const navigate = useNavigate()

    function createPost(project){
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                const state = { message: "Projeto criado com sucesso!" };
                navigate("/projetos", {state});
            })
            .catch(err => console.log(err))

    }

    return(
        <div className={styles.container_center}>
            <div className={styles.container}>
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
                <Formulario handleSubmit={createPost} btnText="Criar Projeto"></Formulario>
            </div>
        </div>
    )
}

export default NovoProjeto