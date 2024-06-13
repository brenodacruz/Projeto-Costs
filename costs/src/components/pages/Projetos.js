import { useLocation, Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Message from "../layout/Message"

import Container from "../layout/Container"

import styles from "./Projetos.module.css"

import ProjectCard from '../projects/ProjectCard'

function Projetos() {
    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then(data => {
                console.log(data)
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.title_main}>
                <h1>Meus Projetos</h1>
                <Link to="/novoprojeto">Criar Projeto</Link>
            </div>
            {message && <Message type="success" msg={message}></Message>}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => {
                        return <ProjectCard id={project.id} name={project.name} budget={project.budget} category={project.category.name} key={project.id}></ProjectCard>
                    })
                }
            </Container>
        </div>
    )
}

export default Projetos