import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import CalculateIcon from "@mui/icons-material/Calculate";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import NewspaperIcon from "@mui/icons-material/Newspaper";



function Collapsible() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="logo" href="/Home">LEARNING_LAB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Math"><CalculateIcon /></Nav.Link>
            <Nav.Link href="/Vocabulary"><FontDownloadIcon /></Nav.Link>
            <Nav.Link href="/Planner"><NewspaperIcon /></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Home"> <HomeIcon /> </Nav.Link>
            <Nav.Link href="/ContactForm"> <HelpIcon /> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Collapsible;