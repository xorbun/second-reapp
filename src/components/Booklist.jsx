import Singlebook from "./Singlebook"
import { Component } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Booklist extends Component
{
    render()
    {
        return(
            <Container>
                <Row>
                    {
                        this.props.books.map((book)=>
                        {
                            return( 
                                <Col key={book.asin} xs={12} md={6} lg={3}>
                                    <Singlebook  immagine={book.img}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}
export default Booklist