
import Card from 'react-bootstrap/Card';

function Singlebook(props)
{
    return(
        <Card>
        <Card.Body>
          <img src={props.img} alt="boh" width="100%" />
        </Card.Body>
      </Card>
    )
}
export default Singlebook