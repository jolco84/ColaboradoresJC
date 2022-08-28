import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


const Header = (props) => {

    const  [buscador, setBuscador] = useState("")

    const buscarColaborador = (e)=>{
        console.log(e.target.value)
        setBuscador(e.target.value)
    }

    props.buscarColaborador(buscador);
    
    return (
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
    )


}

export default Header
