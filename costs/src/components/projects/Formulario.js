import Btn from "../form/Btn"
import Input from "../form/Input"
import Select from "../form/Select"

function Formulario({btnText}){
    return(
        <form>
            <Input type="text" placeholder="Insira o nome do projeto" name="name" text="Nome do Projeto"></Input>
            <Input type="number" placeholder="Insira o orçamento total" name="name" text="Orçamento Total"></Input>
            <Select name="category_id" text="Selecione a categoria"></Select>
            <Btn text={btnText}></Btn>
        </form>
    )
}

export default Formulario