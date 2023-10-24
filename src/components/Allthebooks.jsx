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
                  <Col xs={12} md={6} lg={3}>
                    <Card>
                      <Card.Body>
                        <img key={copertina.asin} src={copertina.img} alt="{copertina}"width="150px" />
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