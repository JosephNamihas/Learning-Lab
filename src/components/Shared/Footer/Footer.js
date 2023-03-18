import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/MailOutline";
import ShareIcon from "@mui/icons-material/Share";
import styles from "./styles.footer.css";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <div className="text-center">
				    <a href="https://github.com/JosephNamihas/Learning-Lab" target="_blank"><GitHubIcon /></a>
            <a href="/ContactForm"><EmailIcon /></a>
            <a href="#"><ShareIcon /></a>
          </div>
          <Col className="text-center copy">
            &copy; 2023 Copyright | Learning_Lab
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;