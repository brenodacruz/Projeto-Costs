import { useEffect, useState } from 'react'

import Btn from "../form/Btn"
import Input from "../form/Input"
import Select from "../form/Select"

function Formulario({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
            .then((data) => { setCategories(data) })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
       // console.log(project)
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e){
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form onSubmit={submit}>
            <Input type="text" placeholder="Insira o nome do projeto" name="name" text="Nome do Projeto" handleOnChange={handleChange} value={project.name ? project.name: ''}></Input>
            <Input type="number" placeholder="Insira o orçamento total" name="budget" text="Orçamento Total" handleOnChange={handleChange} value={project.budget ? project.budget: ''}></Input>
            <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id: ''}></Select>
            <Btn text={btnText}></Btn>
        </form>
    )
}

export default Formulario