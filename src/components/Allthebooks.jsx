import Card from 'react-bootstrap/Card';
import Allthebooks from "../data/fantasy.json"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Mybooks() 
{
  return(
    Allthebooks.map((copertina)=>
                        {
                          return(
          <Container>
            <Row >
              <Col xs={6} md={8}>
                <Card>
                    <Card.Body>
                    {
                        <img key={copertina.asin} src={copertina.img} alt="{copertina}"width="100%" />
                    }
                    </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
           )
        })   
  );
}
export default Mybooks;