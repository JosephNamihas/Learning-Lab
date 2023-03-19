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
          <Button 
            className="py-3 main-btn" 
            variant="success" 
            href="/Login">Awesome Things Here
          </Button>
          <div className="py-3 d-flex justify-content-center">
            <Row>
              <Col>
                <Card style={{ width: "22rem", height: "28rem" }}>
                  <Card.Body>
                    <Card.Title className="title">Mathematics</Card.Title>
                    <Card.Img variant="top" src="./images/math.jpg" />
                    <Card.Text>
                      Maths made fun...Count on us for a fun filled ride!
                    </Card.Text>
                    <Button 
                      className="my-btn" 
                      variant="warning" 
                      href="/Math">Let's Start
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "22rem", height: "28rem" }}>
                  <Card.Body>
                    <Card.Title className="title">English</Card.Title>
                    <Card.Img variant="top" src="./images/English.jpg" />
                    <Card.Text>
                      Where words come alive! Let's read, write, and explore.
                    </Card.Text>
                    <Button 
                      className="my-btn" 
                      variant="warning" 
                      href="/Vocabulary">Let's Start
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "22rem", height: "28rem" }}>
                  <Card.Body>
                    <Card.Title className="title">What's More ?</Card.Title>
                    <Card.Img variant="top" src="./images/more.jpg" />
                    <Card.Text>
                      From science to history, we've got it all, 
                      Come learn with us and have a ball! 
                    </Card.Text>
                    <Button 
                      className="my-btn" 
                      variant="warning">Next <NavigateNextIcon />
                    </Button>
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