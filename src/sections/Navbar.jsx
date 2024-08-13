import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navibar() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home">Voleybol Milli Takım</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Ana Sayfa</Nav.Link>
            <Nav.Link href="https://tr.wikipedia.org/wiki/T%C3%BCrkiye_Voleybol_Federasyonu" target='_blank'>Hakkında</Nav.Link>
            <Nav.Link href="https://tvf.org.tr/" target='_blank'>İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;