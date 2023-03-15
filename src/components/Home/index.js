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
				      <button className={styles.btn}>Check out Journal !</button>
			      </a>
            </Col>
            <Col md>
              <Card className='mb-3'>
                <Card.Img src='https://picsum.photos/200/100' />
                <Card.Body>
                  <Card.Title>
                    Title img.....
                  </Card.Title>
                  <Card.Text>
                    Math...........
                  </Card.Text>
                  <Button>Get Started</Button>
                </Card.Body>
               </Card>
            </Col>
            
          </Row>
      
        </Container>
      </header>
		</section>
	);
}

export default Home;