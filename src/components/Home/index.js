import styles from './styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function Home() {
	return (
		<section className={styles.home_section} id="home">
      <header className='Home-header'>
        <Container>
          <Row>
          <Col md>
            <p className={styles.greet}>Hi there, welcome to</p>
			      <h1 className={styles.heading_1}>Learning Lab.</h1>
			      <h1 className={styles.heading_2}>To Help Your Learning Journey Continue Uninterrupted</h1>
			      <a href="#journal">
				      <button className={styles.btn}>Sign in !</button>
			      </a>
            </Col>
            <Col md>
              <Card className='mb-3'>
                <Card.Img src='./bg2.png' />
               </Card>
            </Col>
            
          </Row>
          <Card className="text-center">
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Footer</Card.Footer>
        </Card>
        </Container>
      </header>
		</section>
	);
}

export default Home;