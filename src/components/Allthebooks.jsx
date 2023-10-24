import Card from 'react-bootstrap/Card';
import Allthebooks from "../data/fantasy.json"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Mybooks() 
{
  return(
          <Container>
            <Row>
              {
                Allthebooks.map((copertina)=>
                {
                return(
                  <Col key={copertina.asin} xs={12} md={6} lg={3}>
                    <Card>
                      <Card.Body>
                        <img  src={copertina.img} alt="{copertina}"width="100%" />
                        <Card.Title>TITOLO: {copertina.title}</Card.Title>
                        <Card.Text>GENERE: {copertina.category}</Card.Text>
                        <Card.Text>PREZZO: {copertina.price} $</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  )
                })
              }
            </Row>
          </Container>
  );
}
export default Mybooks;