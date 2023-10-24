import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Myalert() {
  return (
    <Container>
        <Row>
            <Col className='col-12 mt-5 d-flex justify-content-center'>
      {[
        'primary',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Benvenuti in questo sito senza senso
        </Alert>
      ))}
      </Col>
      </Row>
    </Container>
  );
}

export default Myalert;