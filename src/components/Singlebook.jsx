
import Card from 'react-bootstrap/Card';
import { Component } from 'react';

class Singlebook extends Component 
{
    render(props)
    {    
        return(
        <Card>
            <Card.Body>
                <img src={props.immagine} alt="boh" width="150px" />
            </Card.Body>
        </Card>
        )
    }
}
export default Singlebook