import { useState } from "react"
import { BaseColaboradores } from "../BaseColaboradores"
import {
    Form,
    Button,
} from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Colaboradores = () => {

    const [nombre, setNombre] = useState("")
    const [emailColaborador, setEmailColaborador] = useState("")
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
    const [buscar, setBuscar] = useState("")

    const enviarFormulario = (e) => {
        e.preventDefault();
        if (nombre ==="" || emailColaborador === ""){
            alert("Completar nombre y email")
        }else {
            setListaColaboradores([...listaColaboradores, { id: ((listaColaboradores.length) + 1).toString(), nombre: nombre, correo: emailColaborador }])
        }
        
    }

    const capturaColaborador = (e) => {
        setNombre(e.target.value)
        console.log(e.target.value)
    }
    const capturaEmail = (e) => {
        setEmailColaborador(e.target.value)
        console.log(e.target.value)
    }

    const buscarColaborador = (e) => {
        setBuscar(e.target.value)


    }
    const filtrar = !buscar
        ? listaColaboradores
        : listaColaboradores.filter((lista) =>
            lista.nombre.toLowerCase().includes(buscar.toLowerCase()))
    


    return (
        <div>
            <Navbar key='sm' bg="dark" variant="dark" expand={'sm'} className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">Buscador de Colaboradores</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Busca un colaborador"
                            className="me-2"
                            aria-label="Search"
                            onChange={buscarColaborador}
                        />
                    </Form>
                </Container>
            </Navbar >

            <Form onSubmit={enviarFormulario}>
                <Form.Group className="mb-5" controlId="name">
                    <Form.Label>Nombre del Colaborador</Form.Label>
                    <Form.Control
                        value={nombre}
                        onChange={capturaColaborador}
                        type="text"
                        placeholder="Ingresar Nombre" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Label>Correo del Colaborador</Form.Label>
                    <Form.Control
                        value={emailColaborador}
                        onChange={capturaEmail}
                        type="email"
                        placeholder="Ingresar email"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agregar Colaborador
                </Button>
            </Form>
            <hr />
            <h1>Listado de Colaboradores</h1>
            <ul>
                {
                    buscar === "" ? listaColaboradores.map(colaborador => <li
                        key={colaborador.id}>
                        {colaborador.nombre} - {colaborador.correo}
                    </li>) :
                        filtrar.map((item) => <li
                            key={item.id}>{item.nombre} - {item.correo}
                        </li>)

                }
            </ul>

        </div>

    )

}

export default Colaboradores