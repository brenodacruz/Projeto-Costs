import { useLocation, Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Message from "../layout/Message"

import Container from "../layout/Container"

import Loading from '../layout/Loading'

import styles from "./Projetos.module.css"

import ProjectCard from '../projects/ProjectCard'

function Projetos() {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 2000)
    }, [])

    function removeProject(id){

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.main}>
            <div className={styles.title_main}>
                <h1>Meus Projetos:</h1>
                <Link to="/novoprojeto">Criar Projeto</Link>
            </div>
            {message && <Message type="success" msg={message}></Message>}
            {projectMessage && <Message type="success" msg={projectMessage}></Message>}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => {
                        return <ProjectCard id={project.id} name={project.name} budget={project.budget} category={project.category.name} key={project.id} handleRemove={removeProject}></ProjectCard>
                    })
                }
                {!removeLoading && <Loading></Loading>}
                {removeLoading && projects.length === 0 && (
                    <p>Não Há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}

export default Projetos