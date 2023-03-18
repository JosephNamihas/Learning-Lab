import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import styles from "./styles.home.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Home() {
	return (
		<section className={styles.home_section} id="home">
      <header className="Home-header">
        <Container className="text-center">
          <Card.Body>
            <p>Hi there, welcome to</p>
			      <h1>The Learning Lab</h1>
			      <h3>It's all about having fun journey !</h3>
          </Card.Body>
          <Button className="py-3 main-btn" variant="success">Awesome Things Here</Button>
          <div className="py-3 d-flex justify-content-center">
          <Row>
            <Col>
              <Card style={{ width: "20rem", height: "auto" }}>
              <Card.Body>
                <Card.Title>Mathematics</Card.Title>
                <Card.Img variant="top" src="./images/math.jpg" />
                <Card.Text>
                  Some quick example text to build on the card tite
                </Card.Text>
                <Button className="my-btn" variant="warning" href="/Math">Let's Start</Button>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "20rem", height: "auto" }}>
              <Card.Body>
                <Card.Title>English</Card.Title>
                <Card.Img variant="top" src="./images/English.jpg" />
                <Card.Text>
                  Some quick example text to build on the card tite
                </Card.Text>
                <Button className="my-btn" variant="warning">Let's Start</Button>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "20rem", height: "auto" }}>
              <Card.Body>
                <Card.Title>What's More ?</Card.Title>
                <Card.Img variant="top" src="./images/more.jpg" />
                <Card.Text>
                  Some quick example text to build on the card tite
                </Card.Text>
                <Button className="my-btn" variant="warning">Next <NavigateNextIcon /></Button>
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