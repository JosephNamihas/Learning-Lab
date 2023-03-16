import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import CalculateIcon from '@mui/icons-material/Calculate';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import NewspaperIcon from '@mui/icons-material/Newspaper';



function Collapsible() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LEARNING_LAB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><CalculateIcon /></Nav.Link>
            <Nav.Link href="#pricing"><FontDownloadIcon /></Nav.Link>
            <Nav.Link href="#pricing"><NewspaperIcon /></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"> <HomeIcon /> </Nav.Link>
            <Nav.Link href="#deets"> <HelpIcon /> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Collapsible;