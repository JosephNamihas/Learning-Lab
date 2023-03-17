import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import styles from "./styles.home.css";


function Home() {
	return (
		<section className={styles.home_section} id="home">
      <header className="Home-header">
        <Container className="text-center">
          <Card.Body>
            <p>Hi there, welcome to</p>
			      <h1>The Learning Lab</h1>
			      <h3>It"s all about having fun journey !</h3>
          </Card.Body>
          <Button className="py-3 main-btn" variant="success">Awesome Things Here</Button>
          <div className="py-3 d-flex justify-content-center">
          <Row>
            <Col md-4>
              <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Mathematics</Card.Title>
                <Card.Img variant="top" src="./images/math.jpg" />
                <Card.Text>
                  Some quick example text to build on the card tite
                </Card.Text>
                <Button variant="warning">Go somewhere</Button>
              </Card.Body>
              </Card>
            </Col>
            <Col md-4>
              <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Vocabulary</Card.Title>
                <Card.Img variant="top" src="./images/English.jpg" />
                <Card.Text>
                  Some quick example text to build on the card tite
                </Card.Text>
                <Button variant="warning">Go somewhere</Button>
              </Card.Body>
              </Card>
            </Col>
            <Col md-4>
              <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>What's More ?</Card.Title>
                <Card.Img variant="top" src="./images/more.jpg" />
                <Card.Text>
                  Some quick example text to build on the card tite
                </Card.Text>
                <Button variant="warning">Go somewhere</Button>
              </Card.Body>
              </Card>
            </Col>
          </Row>
          </div>
        </Container>
      </header>
		</section>
	);
}

export default Home;