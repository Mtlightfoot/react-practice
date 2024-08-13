import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'

function NavBar() {
    return (
        <>
            <Navbar id='navbar' bg="light" data-bs-theme="light" className='shadow'>
                <Container>

                    <LinkContainer to='/'>
                        <Navbar.Brand >React Playground</Navbar.Brand>
                    </LinkContainer>

                    <Nav className="me-auto">

                        <LinkContainer to='/Count'>
                            <Nav.Link >Count</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/RockPaperScissors'>
                            <Nav.Link >Rock Paper Scissors</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;