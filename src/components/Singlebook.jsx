
import Card from 'react-bootstrap/Card';

function Singlebook(props)
{
    return(
        <Card>
        <Card.Body>
          <img src={props.immagine} alt="boh" width="150px" />
        </Card.Body>
      </Card>
    )
}
export default Singlebook