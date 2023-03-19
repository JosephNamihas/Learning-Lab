// Main.js
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Main() {
  return (
    <Container>
      {/*...*/}
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>
                From science to history, we've got it all, Come learn with us
                and have a ball!
              </Card.Text>
              <Link to="/learn">
                <Button className="my-btn" variant="warning">
                  Next <NavigateNextIcon />
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/*...*/}
    </Container>
  );
}

export default Main;
