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
          <div className="icon text-center">
				    <a href="#" target="_blank"><GitHubIcon /></a>
            <a href="#" target="_blank"><EmailIcon /></a>
            <a href="#" target="_blank"><ShareIcon /></a>
          </div>
          <Col className="text-center">
            &copy; 2023 Copyright | Learning_Lab
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;