
import Card from 'react-bootstrap/Card';
import { Component } from 'react';

class Singlebook extends Component 
{
    state=
    {
        selected: false,
    }

    Selectedbook=() =>
    {
        this.setState({
            selected: !this.state.selected,
        })
    }
    render()
    {    
        return(
        <Card  className={this.state.selected ? 'red-border' :''} key={this.props.asin}
            onClick={this.Selectedbook} 
            style={{ border: this.state.selected ? '3px solid red' : 'none' }}
        >
            <Card.Body>
                <img src={this.props.immagine} alt="boh" width="150px" />
            </Card.Body>
        </Card>
        )
    }
}
export default Singlebook