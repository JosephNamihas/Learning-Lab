import styles from './styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function Home() {
	return (
		<section className={styles.home_section} id="home">
      <header className='Home-header'>
        <Container className="text-center">
          <Card.Body>
          <p className={styles.greet}>Hi there, welcome to</p>
			      <h1 className={styles.heading_1}>Learning Lab.</h1>
			      <h1 className={styles.heading_2}>To Help Your Learning Journey Continue Uninterrupted</h1>
          </Card.Body>
          <Button variant="outline-success">Awesome Things Here !</Button>
          
          <Row>
            <Col md-3>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="./images/math.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card tite
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
              </Card>
            </Col>
            <Col md-3>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="./images/English.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card tite
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
              </Card>
            </Col>
            <Col md-3>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="./images/more.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card tite
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
              </Card>
            </Col>
          </Row>

         
        </Container>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="success">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Footer</Card.Footer>
        </Card>
      </header>
		</section>
	);
}

export default Home;