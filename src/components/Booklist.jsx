import Singlebook from "./Singlebook"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Booklist=(props)=>
{

    
        return(
            <Container>
                <Row>
                    {
                        props.books.map((book)=>
                        {
                            return( 
                                <Col key={book.asin} xs={12} md={6} lg={6}>
                                    <Singlebook  immagine={book.img} asin={book.asin} 
                                    test2={props.test}/>
                                  
                                </Col>
                            )
                        })
                    }
                    
                </Row>
            </Container>
        )
    
}
export default Booklist